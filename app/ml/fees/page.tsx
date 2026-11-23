import Link from 'next/link';
import MalayalamPage, { malayalamMetadata } from '@/components/MalayalamPage';
import { waLink } from '@/lib/site';
import fees from '@/content/fees.json';

const page = {
  title: 'ട്യൂഷൻ ഫീസ് · കോഴിക്കോട് Eduplus',
  description: 'Eduplus-ലെ ക്ലാസ് തിരിച്ചുള്ള മണിക്കൂർ ഫീസും ഒരുതവണ നൽകേണ്ട പ്രവേശന ഫീസും കാണുക. സെന്ററിലും ഓൺലൈനിലും പഠിക്കാം. ആദ്യ ഡെമോ ക്ലാസ് സൗജന്യമാണ്.',
  englishPath: '/fees',
};

export const metadata = malayalamMetadata(page);

const classLabels: Record<string, string> = {
  t1: 'ക്ലാസ് 1–4', t2: 'ക്ലാസ് 5–7', t3: 'ക്ലാസ് 8',
  t4: 'ക്ലാസ് 9', t5: 'ക്ലാസ് 10', t6: 'പ്ലസ് വൺ / പ്ലസ് ടു',
};

export default function MalayalamFees() {
  return (
    <MalayalamPage {...page} actions={
      <a className="btn btn-green" href={waLink('Hi Eduplus, please confirm the tuition fee for my child.')} target="_blank" rel="noopener noreferrer">
        ഫീസ് വാട്‌സ്ആപ്പിൽ ചോദിക്കാം
      </a>
    }>
      <h2>ക്ലാസ് തിരിച്ചുള്ള മണിക്കൂർ നിരക്ക്</h2>
      <div className="fee-table-wrap">
        <table className="fee-table">
          <thead><tr><th scope="col">ക്ലാസ്</th><th scope="col">മണിക്കൂറിന്</th></tr></thead>
          <tbody>
            {fees.tiers.map((tier) => (
              <tr key={tier.id}><th scope="row">{classLabels[tier.id] ?? tier.range}</th><td>₹{tier.feePerHour}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>പ്രവേശന ഫീസ്</h2>
      <p>
        പ്രവേശന സമയത്ത് ഒരുതവണ ₹{fees.admissionFee} നൽകണം. ഐ.സി.എസ്.ഇ., ഐ.ജി.സി.എസ്.ഇ.
        സിലബസുകൾക്ക് നിരക്കിൽ മാറ്റം ഉണ്ടായേക്കാം. എൽ.കെ.ജി., യു.കെ.ജി. ക്ലാസുകളുടെ നിരക്ക് സെന്ററുമായി
        ബന്ധപ്പെട്ട് ചോദിക്കുക.
      </p>
      <h2>ഒരു മാസത്തേക്കുള്ള ചെലവ് എങ്ങനെ കണക്കാക്കാം?</h2>
      <p>
        മണിക്കൂർ നിരക്കിനെ ആ മാസം പങ്കെടുക്കുന്ന മൊത്തം മണിക്കൂറുമായി ഗുണിക്കുക. ആദ്യ മാസത്തെ കണക്കിൽ
        പ്രവേശന ഫീസ് കൂടി ചേർക്കുക. <Link href="/fees#estimate">ഫീസ് കാൽക്കുലേറ്റർ</Link> ഉപയോഗിച്ചും
        ഏകദേശ തുക കണ്ടെത്താം.
      </p>
      <p>ചേരുന്നതിനു മുമ്പ് ഒരു സൗജന്യ ഡെമോ ക്ലാസ് ചോദിക്കാം. <Link href="/ml/online-tuition-kerala">ഓൺലൈൻ ക്ലാസ് എങ്ങനെയാണ്?</Link></p>
    </MalayalamPage>
  );
}
