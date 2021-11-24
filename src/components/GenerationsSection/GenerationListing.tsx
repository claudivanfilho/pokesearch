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
              className={`p-2 py-4 mb-3 shadow-md rounded-sm text-center font-bold uppercase text-xs transform hover:scale-105 ${
                genID === generationId
                  ? 'bg-purple-600 text-white'
                  : 'hover:bg-purple-200 hover:text-purple-600'
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
