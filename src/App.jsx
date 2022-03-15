import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./paginas/Inicio";
import NuevoCliente from "./paginas/NuevoCliente";
import EditarCliente from "./paginas/EditarCliente";

function App() {
  // Ruta: "/clientes" - MasterPage: <Layout /> se inyectan:
  // - Ruta: "/clientes" - Componente: <Inicio />
  // - Ruta: "/clientes/nuevo" - Componente: <NuevoCliente />
  // - Ruta: "/clientes/editar/:id" - Componente: <EditarCliente />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />}></Route>
          <Route path="nuevo" element={<NuevoCliente />}></Route>
          <Route path="editar/:id" element={<EditarCliente />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
