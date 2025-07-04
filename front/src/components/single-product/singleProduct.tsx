import './singleProduct.css'
import linkedin from '../../assets/icons/linkedin.png';
import x from '../../assets/icons/x.png';
import facebook from '../../assets/icons/facebook.png';

export type SingleProductProps = {
    id: number;
    title: string,
    price: string,
    description: string,
    longDescription: string,
    size: string,
    categorie: string
    tags: string
}

export function SingleProduct(props: SingleProductProps) {

    return (
        <section className="single-product">
            <div className="top">
                <p>Home - Shop - Sofa</p>
            </div>
            
            <div className="single-product-view">
                <div className='single-product-image'>
                    <img src="" alt="" />
                </div>
                <div className='product-info'>
                    <div className="product-top">
                        <h3>{props.title}</h3>
                        <p>R${props.price},00</p>
                        <p id='description'>{props.description}</p>
                    </div>
                    <div id="size">
                        <p>Size</p>
                        <button>L</button>
                        <button>XL</button>
                        <button>XS</button>
                    </div>
                    <div id="color">
                        <p>Color</p>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div>
                        <div>
                            <button>+</button>
                            <p>0</p>
                            <button>-</button>
                        </div>
                        <button>Add to Cart</button>
                        <button>+ Compare</button>
                    </div>
                    <div>
                        <dl>
                            <dt>SKU:</dt>
                            <dd>{props.id}</dd>
                            <dt>Category:</dt>
                            <dd>{props.categorie}</dd>
                            <dt>Tags:</dt>
                            <dd>{props.tags}</dd>
                            <dt>Share:</dt>
                            <dd>
                                <ul>
                                    <li>
                                        <img src={facebook} alt="" />
                                    </li>
                                    <li>
                                        <img src={x} alt="" />
                                    </li>
                                    <li>
                                        <img src={linkedin} alt="" />
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                    </div>

                    <div className='description'>
                        <div className='description-title'>
                            <h4>Description</h4>
                            <h4>Additional Information</h4>
                        </div>
                        <p>{props.longDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}