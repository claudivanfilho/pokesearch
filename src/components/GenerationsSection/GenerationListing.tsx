import { NavLink, useParams } from "react-router-dom";

import { GenerationResponse } from "../../models/index";

const GenerationListing = ({ generations }: { generations: GenerationResponse[] }) => {
  const { generationId } = useParams();

  return (
    <>
      <div className="flex flex-col">
        {generations.map((gen) => (
          <NavLink
            key={`itme-${gen.id}`}
            to={`/generation/${gen.id}`}
            className={`p-2 py-4 mb-3 shadow-md rounded-sm text-center font-bold uppercase text-xs transform hover:scale-105 ${
              `${gen.id}` === generationId
                ? "bg-purple-600 text-white"
                : "hover:bg-purple-200 hover:text-purple-600"
            }`}
          >
            {gen.nameTranslated}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default GenerationListing;
