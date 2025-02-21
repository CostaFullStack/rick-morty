import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="cabecalho">
        <nav>
          <ul>
            <img
              width={70}
              className="teste"
              src="https://i5.walmartimages.com/seo/Rick-and-Morty-Metal-Wall-Art_bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
              alt=""
            />
        
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/episodios"}>Episódios</Link>
            </li>
            <li>
              <Link to={"/localizacao"}>Localizações</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="principal">
        <div className="img-rick-morty">
          <img
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
            alt="Imagem logo"
            className="img_logo"
          />
        </div>
        <Outlet />
      </main>

      <footer className="cabecalho">
        <p>© Todos os direitos reservados</p>
      </footer>
    </>
  );
};
