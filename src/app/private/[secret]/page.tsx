import {allPrivateFields} from '@content';
import {notFound} from 'next/navigation';
import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import {AdditionalInfo} from 'src/components/Articles/AdditionalInfo';
import {ContactInformation} from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import Skills from 'src/components/Articles/Skills';
import {Footer} from 'src/components/Footer/Footer';
import {Header} from '../../../components/Header/Header';


const approvedSecrets = ['topsecret', 'confidential', 'classified'];

export async function generateStaticParams() {
  return approvedSecrets.map(secret => ({ secret }));
}

export default function Page({ params }: { params: { secret: string } }) {
  // If the secret isn't in the approved list, show a 404
  if (!approvedSecrets.includes(params.secret)) {
    notFound();
  }

  return (
      <>
        <Header secret={params.secret} />

        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AboutMe />
            <ContactInformation privateInformation={allPrivateFields} />
          </div>

          <div className="mt-12">
            <Skills />
          </div>

          <div className="mt-12">
            <Professional />
          </div>

          <div className="mt-12">
            <Achievements />
          </div>

          <div className="mt-12">
            <AdditionalInfo />
          </div>
        </div>

        <Footer />
      </>
  );
};
