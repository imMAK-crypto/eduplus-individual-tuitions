import { readFileSync } from 'node:fs';

const config = JSON.parse(readFileSync(new URL('../content/site.json', import.meta.url), 'utf8'));
const { origin, host } = new URL(config.url);
const key = process.env.INDEXNOW_KEY;

async function submit() {
  if (!key || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
    throw new Error('Set INDEXNOW_KEY to the value configured in the live project.');
  }

  const keyLocation = `${origin}/${key}.txt`;
  const verification = await fetch(keyLocation, { redirect: 'error', signal: AbortSignal.timeout(15000) });
  if (!verification.ok || (await verification.text()).trim() !== key) {
    throw new Error('The production IndexNow key file does not match the configured key.');
  }

  const sitemap = await fetch(`${origin}/sitemap.xml`, { redirect: 'error', signal: AbortSignal.timeout(15000) });
  if (!sitemap.ok) throw new Error(`Sitemap returned HTTP ${sitemap.status}.`);
  const published = new Set([...((await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g))]
    .map(([, url]) => url)
    .filter((url) => new URL(url).origin === origin));

  const changed = process.argv.slice(2).map((path) => new URL(path, origin).href);
  const urlList = changed.length ? [...new Set(changed)] : [...published];
  if (!urlList.length || urlList.some((url) => !published.has(url))) {
    throw new Error('Every submitted URL must be present in the canonical sitemap.');
  }

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
    signal: AbortSignal.timeout(15000),
  });
  if (response.status === 200 || response.status === 202) {
    console.log(`IndexNow HTTP ${response.status} for ${urlList.length} URLs${response.status === 202 ? ' (key validation pending)' : ''}.`);
    return;
  }
  throw new Error(`IndexNow returned HTTP ${response.status}.`);
}

try {
  await submit();
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
