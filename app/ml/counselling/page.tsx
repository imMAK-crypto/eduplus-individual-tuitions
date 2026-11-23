import Link from 'next/link';
import MalayalamPage, { malayalamMetadata } from '@/components/MalayalamPage';
import { SITE, telLink, waLink } from '@/lib/site';

const page = {
  title: 'വിദ്യാർത്ഥി കൗൺസലിംഗ് കോഴിക്കോട്',
  description: 'പഠനം, പരീക്ഷാ സമ്മർദ്ദം, ആത്മവിശ്വാസം, കരിയർ തിരഞ്ഞെടുപ്പ് എന്നിവയിൽ സഹായം തേടുന്ന വിദ്യാർത്ഥികൾക്ക് അശോകപുരത്തെ Eduplus-നെ ബന്ധപ്പെടാം.',
  englishPath: '/counselling',
};

export const metadata = malayalamMetadata(page);

export default function MalayalamCounselling() {
  return (
    <MalayalamPage {...page} actions={
      <a className="btn btn-red" href={waLink('Hi Eduplus, I would like to ask about student counselling appointments.')} target="_blank" rel="noopener noreferrer">
        അപ്പോയിന്റ്മെന്റ് വിവരം ചോദിക്കാം
      </a>
    }>
      <h2>എന്തൊക്കെ കാര്യങ്ങളിൽ സഹായം ചോദിക്കാം?</h2>
      <ul className="bullets">
        <li>പഠനവും പരീക്ഷയും സംബന്ധിച്ച സമ്മർദ്ദം</li>
        <li>ആത്മവിശ്വാസവും പഠിക്കാനുള്ള താൽപര്യവും</li>
        <li>ശ്രദ്ധ, പഠനരീതി, സമയക്രമം തുടങ്ങിയ കാര്യങ്ങൾ</li>
        <li>വികാരങ്ങളിലും പെരുമാറ്റത്തിലും കാണുന്ന മാറ്റങ്ങളെക്കുറിച്ചുള്ള ആശങ്കകൾ</li>
        <li>എസ്.എസ്.എൽ.സി., പ്ലസ് ടു കഴിഞ്ഞുള്ള പഠനവും കരിയർ തിരഞ്ഞെടുപ്പും</li>
        <li>ആശയവിനിമയം, ലക്ഷ്യങ്ങൾ നിശ്ചയിക്കൽ, സമയം ക്രമീകരിക്കൽ</li>
      </ul>
      <h2>ബുക്ക് ചെയ്യുന്നതിന് മുമ്പ് എന്ത് ചോദിക്കണം?</h2>
      <p>
        വിദ്യാർത്ഥിയുടെ പ്രായവും ക്ലാസും പറഞ്ഞ് സേവനം അനുയോജ്യമാണോ എന്നറിയുക. ട്യൂഷൻ വിദ്യാർത്ഥിയല്ലെങ്കിൽ
        സേവനം ലഭിക്കുമോ, ഓൺലൈൻ സെഷൻ ഉണ്ടോ, രക്ഷിതാവിന്റെ പങ്ക് എന്താണ് എന്നിവ ചോദിക്കുക.
        കൗൺസലറുടെ പേര്, യോഗ്യത, സ്വകാര്യതയും സമ്മതവും കൈകാര്യം ചെയ്യുന്ന രീതി, ഫീസ് എന്നിവ വ്യക്തമാക്കുക.
      </p>
      <p>
        <a href={telLink}>{SITE.phone}</a> എന്ന നമ്പറിൽ വിളിക്കാം. <Link href="/contact">വിലാസവും പ്രവർത്തന സമയവും</Link> കാണുക.
        പ്ലസ് വൺ വിഷയങ്ങൾ തിരഞ്ഞെടുക്കാൻ <Link href="/guides/choose-plus-one-stream-after-sslc">ഇംഗ്ലീഷിലുള്ള ഗൈഡ്</Link> വായിക്കാം.
      </p>
      <h2>അടിയന്തര സഹായം</h2>
      <p>
        ചികിത്സ ആവശ്യമായ പ്രശ്നങ്ങൾക്ക് യോഗ്യതയുള്ള മാനസികാരോഗ്യ വിദഗ്ധന്റെ സഹായം തേടുക.
        ഉടൻ അപകടസാധ്യതയുണ്ടെങ്കിൽ <a href="tel:112">112</a> വിളിക്കുക. സൗജന്യ മാനസികാരോഗ്യ സഹായത്തിന്
        ടെലി-മാനസ് <a href="tel:14416">14416</a> ലഭ്യമാണ്.
      </p>
    </MalayalamPage>
  );
}
