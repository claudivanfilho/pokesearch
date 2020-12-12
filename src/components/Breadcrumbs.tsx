import { Link, RouteComponentProps } from 'react-router-dom';

const Breadcrumbs = ({
  match: {
    params: { id, name }
  }
}: RouteComponentProps<{
  id?: string;
  name?: string;
}>) => {
  return (
    <nav className="container block lg:hidden">
      <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
        <li className="px-2">
          {!id ? (
            <span className="text-gray-700">Gerações </span>
          ) : (
            <Link
              to={`/`}
              className="flex w-full lg:w-40 text-purple-700 hover:underline"
            >
              Gerações
            </Link>
          )}
        </li>
        {id && (
          <>
            <li>/</li>
            <li className="px-2">
              {!name ? (
                <span className="text-gray-700">Geração {id} </span>
              ) : (
                <Link
                  to={`/generation/${id}`}
                  className="flex w-full lg:w-40 text-purple-700 hover:underline"
                >
                  Geração {id}
                </Link>
              )}
            </li>
          </>
        )}
        {name && (
          <>
            <li>/</li>
            <li className="px-2">
              <span className="text-gray-700">{name}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
