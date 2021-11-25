import { Link, useParams } from "react-router-dom";

import useGenerationSWR from "../hooks/useGenerationSWR";
import usePokemonSWR from "../hooks/usePokemonSWR";

const Breadcrumbs = () => {
  const { generationId, pokemonName } = useParams();
  const { generation } = useGenerationSWR();
  const { pokemon } = usePokemonSWR();

  const renderTerm = (clickable: boolean, path: string, text: string) =>
    clickable ? (
      <Link to={path} className="flex w-full text-purple-700 lg:w-40 hover:underline">
        {text}
      </Link>
    ) : (
      <span className="text-gray-700">{text} </span>
    );

  return (
    <nav className="container block lg:hidden">
      <ol className="flex py-4 pl-4 rounded list-reset bg-grey-light text-grey">
        <li className="px-2">{renderTerm(!!generationId, "/", "Gerações")}</li>
        {generationId && (
          <>
            <li>/</li>
            <li className="px-2">
              {renderTerm(
                !!pokemonName,
                `/generation/${generationId}`,
                generation?.nameTranslated!
              )}
            </li>
          </>
        )}
        {pokemonName && (
          <>
            <li>/</li>
            <li className="px-2 text-gray-700">{pokemon?.nameTranslated || pokemonName}</li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
