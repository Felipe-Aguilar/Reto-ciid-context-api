import { useContext } from "react";
import { Busqueda } from "../../context/Busqueda";

const Noticias = ({ noticias }) => {
    
    const {busqueda, buscado} = useContext(Busqueda);

    return ( 
        <div className="col-12 col-lg-7">
            <div className="noticias">
                <p>
                    Feed de Noticias {busqueda && `: ${buscado}`}
                </p>

                { noticias.map((noticia, index)=>(
                    <div className="noticias-cuerpo" key={index}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>{noticia.name}</h2>
                            <p>
                                {noticia.datePublished.substring(0, 10)}
                            </p>
                        </div>
                        { noticia.image?.thumbnail?.contentUrl &&
                            <div className="imagen">
                                <img 
                                    className="img-fluid"
                                    src={noticia.image.thumbnail.contentUrl}
                                />
                            </div>
                        }
                        <div className="noticia-parrafo">
                            <p>
                                {noticia.description}
                            </p>
                        </div>
                    </div>
                ))

                }

                {/* <div className="noticias-cuerpo">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Titulo</h2>
                        <p>
                            06/12/1999
                        </p>
                    </div>
                    <div className="imagen">
                        <img src={url} className="img-fluid" />
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis natus architecto numquam quae odit tempore aliquam inventore vitae distinctio.
                        </p>
                    </div>
                </div> */}

            </div>
        </div>
    );
}

export default Noticias;