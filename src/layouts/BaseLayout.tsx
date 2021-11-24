import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import GenerationSection from '../components/GenerationSection';
import GenerationsSection from '../components/GenerationsSection';
import PokemonDetailsSection from '../components/PokemonDetailsSection';

const BaseLayout = () => {
  const { generationId, pokemonName } = useParams();
  const isOnGenerationPage = generationId && !pokemonName;

  return (
    <div className="h-screen pt-14">
      <Header />
      {generationId && <Breadcrumbs />}
      <main className="overflow-y-auto" style={{ height: 'calc(100vh - 135px)' }}>
        <div className="max-w-screen-xl block lg:grid grid-cols-12 px-5 m-auto lg:mt-8 lg:divide-x-2 lg:gap-x-5 lg:divide-solid 2xl:px-0">
          <div className={`col-span-2 xl:col-span-2 ${generationId ? 'hidden lg:block' : 'block'}`}>
            <GenerationsSection />
          </div>

          {generationId && (
            <div
              className={`col-span-6 lg:pl-5 ${isOnGenerationPage ? 'block' : 'hidden lg:block'}`}
            >
              <GenerationSection />
            </div>
          )}

          {pokemonName && (
            <div className={`col-span-4 lg:pl-5 ${pokemonName ? 'block' : 'hidden lg:block'}`}>
              <PokemonDetailsSection />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
