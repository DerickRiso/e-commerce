import './singleProduct.css'
import linkedin from '../../assets/icons/linkedin.png';
import x from '../../assets/icons/x.png';
import facebook from '../../assets/icons/facebook.png';
import arrow from '../../assets/icons/arrow.png';

export type SingleProductProps = {
    id: number;
    title: string,
    price: string,
    sale: string,
    description: string,
    longDescription: string,
    size: string,
    categorie: string
    tags: string
}

export function SingleProduct(props: SingleProductProps) {

    return (
        <section className="single-product">
            <div className='product'>
                <div className="top">
                    <p>Home <img src={arrow} /> Shop <img src={arrow} /> <span>{props.title}</span></p>
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

                        <div className='action-buttons'>
                            <div className='increase-decrease'>
                                <button>-</button>
                                <p>0</p>
                                <button>+</button>
                            </div>
                            <button>Add to Cart</button>
                            <button>+ Compare</button>
                        </div>
                        
                        <div className='adicional-info'>
                            <dl>
                                <dt>SKU</dt>
                                <dd>:</dd>
                                <dd>{props.id}</dd>
                                <dt>Category</dt>
                                <dd>:</dd>
                                <dd>{props.categorie}</dd>
                                <dt>Tags</dt>
                                <dd>:</dd>
                                <dd>{props.tags}</dd>
                                <dt>Share</dt>
                                <dd>:</dd>
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
                
                    </div>
                </div>
            </div>
            <div className='description'>
                <div className='description-title'>
                    <h4>Description</h4>
                    <h4>Additional Information</h4>
                </div>
                <p>{props.longDescription} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam, ipsum ut molestias dolorem, inventore unde suscipit labore, hic possimus quos voluptate magnam dolores non veritatis maxime quibusdam similique accusantium.</p>
            </div>
        </section>
    )
}