import { Resource } from '../../models/index';
import { NavLink, useParams } from 'react-router-dom';

const GenerationListing = ({ generations }: { generations: Resource[] }) => {
  const { generationId } = useParams();

  return (
    <>
      <div className="flex flex-col">
        {generations.map((gen) => {
          const genID = gen.url
            .substr(0, gen.url.length - 1)
            .split('/')
            .pop();
          return (
            <NavLink
              key={`itme-${genID}`}
              to={`/generation/${genID}`}
              className={`p-2 py-4 mb-3 border-2 border-solid rounded-lg text-center hover:bg-purple-500 hover:text-white font-bold uppercase text-xs ${
                genID === generationId ? 'bg-purple-600 text-white border-purple-600' : ''
              }`}
            >
              {gen?.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default GenerationListing;
