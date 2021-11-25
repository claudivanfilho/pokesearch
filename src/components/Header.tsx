import { ChevronLeft } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

import useLocale from "../hooks/useLocale";

const Header = () => {
  const navigate = useNavigate();
  const { locale, setLocale } = useLocale();

  return (
    <div className="fixed top-0 z-10 w-full py-3 text-white bg-purple-700">
      <div className="flex justify-between max-w-screen-xl px-5 mx-auto 2xl:px-0">
        <h1 className="text-2xl font-bold">PokeSearch</h1>
        <select
          className="px-2 bg-transparent"
          value={locale}
          onChange={(val) => setLocale!(val.target.value)}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="ko">KO</option>
          <option value="ja">JA</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
        </select>
        <div
          className="flex items-center text-xl font-bold cursor-pointer lg:hidden"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft fontSize="large" />
          Back
        </div>
      </div>
    </div>
  );
};

export default Header;
