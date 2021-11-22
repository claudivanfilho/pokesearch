import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import GenerationsLayout from './GenerationsLayout';

const BaseLayout = () => {
  const { generationId } = useParams();

  return (
    <div className="h-screen pt-14">
      <Header />
      {generationId && <Breadcrumbs />}
      <main style={{ height: 'calc(100vh - 135px)' }}>
        <div className="h-full max-w-screen-xl block lg:grid grid-cols-8 px-5 m-auto mt-4 lg:mt-8 lg:divide-x-2 lg:gap-x-5 lg:divide-solid 2xl:px-0">
          <GenerationsLayout />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;

