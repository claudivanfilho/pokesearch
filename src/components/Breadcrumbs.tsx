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
      text
    );

  return (
    <nav className="container block lg:hidden">
      <ol className="flex gap-2 py-4 pl-4 text-gray-700 list-reset bg-grey-light">
        <li>{renderTerm(!!generationId, "/", "Gerações")}</li>
        {generationId && <li>/</li>}
        {generationId && (
          <li>
            {renderTerm(!!pokemonName, `/generation/${generationId}`, generation?.nameTranslated!)}
          </li>
        )}
        {pokemonName && <li>/</li>}
        {pokemonName && <li>{pokemon?.nameTranslated || pokemonName}</li>}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
