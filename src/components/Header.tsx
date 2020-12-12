import { ChevronLeft } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  return (
    <div className="w-full bg-purple-700 py-3 text-white fixed top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-5 2xl:px-0 flex justify-between">
        <h1 className="text-2xl font-bold">PokeSearch</h1>
        <div
          className="flex lg:hidden items-center text-xl font-bold cursor-pointer"
          onClick={() => history.goBack()}
        >
          <ChevronLeft fontSize="large" />
          Voltar
        </div>
      </div>
    </div>
  );
};

export default Header;
