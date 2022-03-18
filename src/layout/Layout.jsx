import { Outlet, Link, useLocation } from "react-router-dom";

// Componente <Layout /> donde se van a mostrar todas la rutas:
const Layout = () => {
  // Indicar en que pagina nos encontramos
  const location = useLocation();
  const url = location.pathname;
  console.log(url);

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            to="/clientes"
            className={`${
              url === "/clientes" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300" `}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
              url === "/clientes/nuevo" ? "text-blue-300" : "text-white"
            } text-2xl block mt-2 hover:text-blue-300" `}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 p-5 bg-gray-200 md:h-screen overflow-scroll">
        {/* <Outlet /> indica donde se inyecta el componente externo */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
