import "./NewHeader.css";

export default function NewHeader() {

  return (
    <>
      <header className="new-header">
        <a href="/home" class="logo">
          <img src="/img/LogoSabiosGuias-Inverso.png" alt="logo"></img>
        </a>
        <nav class="navigation">
          <ul class="menu-horizontal">
            <li>
              <a href="/all-routes" class="nav-link">Ver rutas</a>
              <ul class="menu-vertical">
                <li><a href="/route-detail/0">Agüimes</a></li>
                <li><a href="/route-detail/1">Alemán</a></li>
                <li><a href="/route-detail/2">Tras las huellas británicas</a></li>
                <li><a href="/route-detail/3">Inmersión Lingüistica</a></li>
                <li><a href="/route-detail/4">Jardín Canario</a></li>
                <li><a href="/route-detail/5">Transhumancia</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}