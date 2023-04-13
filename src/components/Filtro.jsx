import { useContext, useState } from "react";
import { BusquedaNoticias } from "../API/NoticiasAPI";

import { Busqueda } from "../../context/Busqueda";

const Filtro = ({ actualizaBusqueda, datosNoticias }) => {

    const {busqueda, setBusqueda, setBuscado} = useContext(Busqueda);

    const realizaBusqueda = async (e) => {
        const buscando = e.target.innerText;
        setBusqueda(true);
        setBuscado(buscando);

        const noticiasBusqueda = await BusquedaNoticias(buscando);
        actualizaBusqueda(noticiasBusqueda);
    }

    const Inicio = () => {
        datosNoticias();
        setBusqueda(false);
    }

    return ( 
        <div className="col-12 col-lg-3">
            <div className="feed-filtro">
                <div className="titulo">
                    <i className="bi bi-funnel-fill"></i>
                    <p>Filtro</p>
                </div>
                <hr/>

                { busqueda &&
                    <div className="filtro">
                        <button onClick={Inicio}>
                            <i className="bi bi-house"></i>
                            Inicio
                        </button>
                    </div>
                }


                <div className="filtro">
                    <button onClick={realizaBusqueda}>
                        Mundo de la economía digital
                    </button>
                </div>
                <div className="filtro">
                    <button onClick={realizaBusqueda}>
                        Entretenimiento
                    </button>
                </div>
                <div className="filtro">
                    <button onClick={realizaBusqueda}>
                        Negocios
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Filtro;