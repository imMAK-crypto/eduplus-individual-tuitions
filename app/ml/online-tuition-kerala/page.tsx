import Link from 'next/link';
import { languageUrls, pageMetadata } from '@/lib/metadata';
import { SITE, breadcrumbLd, jsonLd, telLink, waLink, webPageLd } from '@/lib/site';
import fees from '@/content/fees.json';

const TITLE = 'കേരളത്തിൽ വ്യക്തിഗത ഓൺലൈൻ ട്യൂഷൻ';
const DESCRIPTION = 'എൽ.കെ.ജി. മുതൽ പ്ലസ് ടു വരെ കേരള സിലബസ്, സി.ബി.എസ്.ഇ., ഐ.സി.എസ്.ഇ. വിദ്യാർത്ഥികൾക്ക് ലൈവ് വ്യക്തിഗത ട്യൂഷൻ. ഫീസും സൗജന്യ ഡെമോ ക്ലാസും അറിയാം.';
const PATH = '/ml/online-tuition-kerala';

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  language: 'ml-IN',
  translations: languageUrls('/online-tuition-kerala'),
});

export default function MalayalamOnlineTuitionPage() {
  return (
    <main id="main" lang="ml-IN">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd(TITLE, PATH, DESCRIPTION, 'ml-IN')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd(TITLE, PATH)) }} />
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <Link href="/">ഹോം</Link><span className="sep">/</span><span>ഓൺലൈൻ ട്യൂഷൻ</span>
          </div>
          <div style={{ maxWidth: '790px' }}>
            <h1 className="display">{TITLE}</h1>
            <p className="lead" style={{ marginTop: '1rem' }}>
              കോഴിക്കോട് അശോകപുരത്തെ Eduplus-ൽ എൽ.കെ.ജി. മുതൽ പ്ലസ് ടു വരെയുള്ള വിദ്യാർത്ഥികൾക്ക്
              ഒരു അധ്യാപകനോടൊപ്പം നേരിട്ട് ഓൺലൈനായി പഠിക്കാം. കേരള സിലബസ്, സി.ബി.എസ്.ഇ.,
              ഐ.സി.എസ്.ഇ. എന്നിവയ്ക്കുള്ള ക്ലാസുകൾ ലഭ്യമാണ്.
            </p>
            <div className="hero-cta" style={{ marginTop: '1.6rem' }}>
              <a className="btn btn-red" href={waLink('Hi Eduplus, I would like a free online tuition demo in Malayalam.')} target="_blank" rel="noopener noreferrer">
                സൗജന്യ ഡെമോ ക്ലാസ് ചോദിക്കാം
              </a>
              <Link href="/online-tuition-kerala" className="btn btn-outline" lang="en-IN" hrefLang="en-IN">Read in English</Link>
            </div>
          </div>
        </div>
      </section>
      <div className="section container">
        <div className="legal prose">
          <h2>ഓൺലൈൻ ക്ലാസ് എങ്ങനെയാണ്?</h2>
          <p>
            അധ്യാപകനുമായി ലൈവായി സംസാരിക്കാനും സംശയങ്ങൾ ചോദിക്കാനും കഴിയും. കുട്ടിയുടെ പാഠപുസ്തകവും
            പഠനവേഗവും അനുസരിച്ച് ക്ലാസ് മുന്നോട്ടുപോകും. ഫോൺ, ടാബ്‌ലെറ്റ് അല്ലെങ്കിൽ കമ്പ്യൂട്ടർ,
            സ്ഥിരമായ ഇന്റർനെറ്റ് കണക്ഷൻ, പാഠപുസ്തകം, നോട്ട്‌ബുക്ക് എന്നിവ ഒരുക്കിവയ്ക്കുക.
          </p>
          <h2>ഏതൊക്കെ ക്ലാസുകൾക്ക് ചേരാം?</h2>
          <p>
            ചെറിയ ക്ലാസുകളിൽ വായന, എഴുത്ത്, ഗണിതം എന്നിവയ്ക്കും ഉയർന്ന ക്ലാസുകളിൽ വിഷയപഠനത്തിനും
            പരീക്ഷാ പരിശീലനത്തിനും സഹായം ലഭിക്കും. എസ്.എസ്.എൽ.സി., പ്ലസ് വൺ, പ്ലസ് ടു വിദ്യാർത്ഥികൾക്ക്
            റിവിഷനും ചോദ്യപേപ്പർ പരിശീലനവും ചോദിക്കാം. ആവശ്യമായ വിഷയവും പഠിപ്പിക്കേണ്ട ഭാഷയും
            ഡെമോ ബുക്ക് ചെയ്യുമ്പോൾ അറിയിക്കുക.
          </p>
          <h2>ഫീസ് എത്രയാണ്?</h2>
          <p>
            ഒന്നാം ക്ലാസ് മുതൽ നാലാം ക്ലാസ് വരെ മണിക്കൂറിന് ₹{fees.tiers[0].feePerHour}. പ്ലസ് വൺ,
            പ്ലസ് ടു ക്ലാസുകൾക്ക് മണിക്കൂറിന് ₹{fees.tiers[fees.tiers.length - 1].feePerHour}.
            പ്രവേശന ഫീസ് ഒരുതവണ ₹{fees.admissionFee}. ഐ.സി.എസ്.ഇ., ഐ.ജി.സി.എസ്.ഇ. നിരക്കുകളിൽ
            മാറ്റമുണ്ടാകാം. <Link href="/fees">എല്ലാ ക്ലാസുകളുടെയും നിരക്കുകൾ കാണുക</Link>.
          </p>
          <h2>ഡെമോ ക്ലാസ് എങ്ങനെ ബുക്ക് ചെയ്യാം?</h2>
          <p>
            ക്ലാസ്, സിലബസ്, വിഷയം, സൗകര്യമുള്ള സമയം എന്നിവ Eduplus-നെ അറിയിക്കുക. ആദ്യ ഡെമോ ക്ലാസ്
            സൗജന്യമാണ്. <a href={telLink}>{SITE.phone}</a> എന്ന നമ്പറിൽ വിളിക്കാം. സെന്ററിൽ വന്ന്
            പഠിക്കാൻ താൽപര്യമുണ്ടെങ്കിൽ <Link href="/contact">അശോകപുരത്തെ വിലാസവും സമയവും</Link> കാണുക.
          </p>
        </div>
      </div>
    </main>
  );
}
