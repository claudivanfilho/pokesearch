import { useParams, Outlet } from 'react-router-dom';

import GenerationSection from '../components/GenerationSection';

export default function GenerationLayout() {
  const { generationId, pokemonName } = useParams();
  const isOnGenerationPage = generationId && !pokemonName;
  return (
    <>
      <div className={`col-span-4 lg:pl-5 ${isOnGenerationPage ? 'block' : 'hidden lg:block'}`}>
        <GenerationSection />
      </div>
      <Outlet />
    </>
  );
}
