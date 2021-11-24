import { ChevronLeft } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 z-10 w-full py-3 text-white bg-purple-700">
      <div className="flex justify-between max-w-screen-xl px-5 mx-auto 2xl:px-0">
        <h1 className="text-2xl font-bold">PokeSearch</h1>
        <div
          className="flex items-center text-xl font-bold cursor-pointer lg:hidden"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft fontSize="large" />
          Voltar
        </div>
      </div>
    </div>
  );
};

export default Header;
