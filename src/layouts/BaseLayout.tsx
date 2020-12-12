import Header from '../components/Header';
import GenerationLayout from './GenerationLayout';
import GenerationsLayout from './GenerationsLayout';
import { RouteComponentProps } from 'react-router-dom';
import PokemonDetailsLayout from './PokemonDetailsLayout';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';

const BaseLayout = (
  props: RouteComponentProps<{
    id?: string;
    name?: string;
  }>
) => {
  return (
    <div className="h-screen pt-14">
      <Header />
      {props.match.params.id && <Breadcrumbs {...props} />}
      <main className="w-full pb-14">
        <div className="max-w-screen-xl m-auto mt-4 lg:mt-8 flex px-5 2xl:px-0">
          <div
            className={`w-full lg:w-1/5 ${
              props.match.params.id ? 'hidden lg:block' : 'block'
            }`}
          >
            <GenerationsLayout />
          </div>
          <div className="border-gray-300 border-l mx-4 shadow-inner w-1 hidden lg:block" />
          <div
            className={`w-full lg:w-1/2 flex flex-col ${
              !props.match.params.id || props.match.params.name
                ? 'hidden lg:block'
                : 'block'
            }`}
          >
            <GenerationLayout {...props} />
          </div>
          {props.match.params.id && (
            <div className="border-gray-300 border-l mx-4 shadow-inner w-1 hidden lg:block" />
          )}
          <div
            className={`w-full lg:w-1/3 ${
              props.match.params.name ? 'block' : 'hidden lg:block'
            }`}
          >
            {props.match.params.id && <PokemonDetailsLayout {...props} />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
