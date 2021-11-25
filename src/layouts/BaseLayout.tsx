import { useParams } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import GenerationSection from "../components/GenerationSection";
import GenerationsSection from "../components/GenerationsSection";
import Header from "../components/Header";
import PokemonDetailsSection from "../components/PokemonDetailsSection";

const BaseLayout = () => {
  const { generationId, pokemonName } = useParams();
  const isOnGenerationPage = generationId && !pokemonName;

  return (
    <div className="h-screen pt-14">
      <Header />
      {generationId && <Breadcrumbs />}
      <main className="overflow-y-auto" style={{ height: "calc(100vh - 135px)" }}>
        <div className="block max-w-screen-xl grid-cols-12 px-5 m-auto lg:grid lg:mt-8 lg:divide-x-2 lg:divide-solid lg:gap-x-5 2xl:px-0">
          <div className={`col-span-2 mt-4 lg:mt-0 ${generationId ? "hidden lg:block" : "block"}`}>
            <GenerationsSection />
          </div>

          <div className={`col-span-6 lg:pl-5 ${isOnGenerationPage ? "block" : "hidden lg:block"}`}>
            {generationId && <GenerationSection />}
          </div>

          <div className={`col-span-4 lg:pl-5 ${pokemonName ? "block" : "hidden lg:block"}`}>
            {pokemonName && <PokemonDetailsSection />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
