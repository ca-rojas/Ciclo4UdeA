import React, { Fragment } from 'react'
import Metadata from './layout/MetaData'
import {useDispatch} from 'react-redux'  
import { getProducts } from '../actions/productActions'

export const Home = () => {
  
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch])

  return (
    <Fragment>
        <Metadata title="Lo mejor para tu mascota"></Metadata>
        <h1 id="encabezado_productos">Ultimos Productos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/* producto 1  */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra_gold.jpeg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Gold Holistic Gatos</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalle</a>
                        </div>
                    </div>
                </div>

                {/* producto 2 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra-nuggets-mantenimiento.jpeg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Gold Holistic Gatos</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 2 reviews</span>
                            </div>
                            <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalle</a>
                        </div>
                    </div>
                </div>

                {/* producto 3 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra-nuggets-performance.jpeg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Nuggets Performance</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 12 reviews</span>
                            </div>
                            <p className='card-text'>$80.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalle</a>
                        </div>
                    </div>
                </div>

                {/* producto 4 */}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/nutra-nuggets-profesional.webp' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Nuggets Professional</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 7 reviews</span>
                            </div>
                            <p className='card-text'>$75.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalle</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Fragment>
  )
}
export default Home