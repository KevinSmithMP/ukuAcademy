import { Link } from "react-router-dom";
import "./HeaderComponent.css"

function HeaderComponent(){
    return(
        <header className="header">
            <h1 className="title">Bienvenido</h1>
            <nav>
                <ul className="link-list">
                    <li>
                        <Link className="link" to="/">Formulario</Link>
                    </li>
                     <li>
                        <Link className="link" to="/Listaformulario">Listas de Formularios</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;