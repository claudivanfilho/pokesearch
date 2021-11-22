import { useParams, Outlet } from 'react-router-dom';
import GenerationsSection from '../components/GenerationsSection';

export default function GenerationsLayout() {
  const { generationId } = useParams();

  return (
    <>
      <div className={`col-span-1 ${generationId ? 'hidden lg:block' : 'block'}`}>
        <GenerationsSection />
      </div>
      <Outlet />
    </>
  );
}
