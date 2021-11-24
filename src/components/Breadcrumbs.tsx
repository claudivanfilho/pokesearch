import { Link, useParams } from 'react-router-dom';

const Breadcrumbs = () => {
  const { generationId, pokemonName } = useParams();

  return (
    <nav className="container block lg:hidden">
      <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
        <li className="px-2">
          {!generationId ? (
            <span className="text-gray-700">Gerações </span>
          ) : (
            <Link to={`/`} className="flex w-full lg:w-40 text-purple-700 hover:underline">
              Gerações
            </Link>
          )}
        </li>
        {generationId && (
          <>
            <li>/</li>
            <li className="px-2">
              {!pokemonName ? (
                <span className="text-gray-700">Geração {generationId} </span>
              ) : (
                <Link
                  to={`/generation/${generationId}`}
                  className="flex w-full lg:w-40 text-purple-700 hover:underline"
                >
                  Geração {generationId}
                </Link>
              )}
            </li>
          </>
        )}
        {pokemonName && (
          <>
            <li>/</li>
            <li className="px-2">
              <span className="text-gray-700">{pokemonName}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
