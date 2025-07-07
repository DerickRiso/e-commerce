import './singleProduct.css'
import linkedin from '../../assets/icons/linkedin.png';
import x from '../../assets/icons/x.png';
import facebook from '../../assets/icons/facebook.png';
import arrow from '../../assets/icons/arrow.png';
import { useState } from 'react';

export type SingleProductProps = {
    id: number;
    title: string,
    price: string,
    sale: string,
    description: string,
    longDescription: string,
    size: string,
    categorie: string,
    tag: string,
    alt: string,
    image: string,
    miniImage1: string,
    miniImage2: string,
    miniImage3: string,
    miniImage4: string
}

export function SingleProduct(props: SingleProductProps) {

    function setSize(event: React.MouseEvent<HTMLButtonElement>) {
        const btns = document.querySelectorAll('#size button');
        const target = event.target as HTMLButtonElement;

        btns.forEach((btn) => {
            btn.classList.remove('selected');
        })
        target.classList.add('selected')
    }

    function setColor(event: React.MouseEvent<HTMLButtonElement>) {
        const btns = document.querySelectorAll('#color button');
        const target = event.target as HTMLButtonElement;

        btns.forEach((btn) => {
            btn.classList.remove('selected-color');
        })
        target.classList.add('selected-color')
    }

    const [val, setVal] = useState(0);

    function increase() {
        setVal((prev) => prev + 1);
    }

    function decrease() {
        setVal((prev) => (prev > 0 ? prev - 1 : 0));
    }

    function selectImage(event: React.MouseEvent<HTMLImageElement>) {
        const picture = document.getElementById('big-picture') as HTMLImageElement;
        const clickedImage = event.target as HTMLImageElement;

        const saveSrc = picture.src;
        picture.src = clickedImage.src;
        clickedImage.src = saveSrc;
    }

    return (
        <section className="single-product">
            <div className='product'>
                <div className="top">
                    <p>
                        Home 
                        <img src={arrow} /> 
                        Shop 
                        <img src={arrow} /> 
                        <span>{props.title}</span></p>
                </div>
                
                <div className="single-product-view">
                    <div className='single-product-image'>
                        <div>
                            <img src={props.miniImage1} onClick={selectImage} alt={props.alt} />
                            <img src={props.miniImage2} onClick={selectImage} alt={props.alt} />
                            <img src={props.miniImage3} onClick={selectImage} alt={props.alt} />
                            <img src={props.miniImage4} onClick={selectImage} alt={props.alt} />
                        </div>
                        <img id='big-picture' src={props.image} alt={props.alt} />
                    </div>
                    <div className='product-info'>
                        <div className="product-top">
                            <h3>{props.title}</h3>
                            <p>R${props.price},00</p>
                            <p id='description'>{props.description}</p>
                        </div>

                        <div id="size">
                            <p>Size</p>
                            <button onClick={setSize}>L</button>
                            <button onClick={setSize}>XL</button>
                            <button onClick={setSize}>XS</button>
                        </div>

                        <div id="color">
                            <p>Color</p>
                            <button onClick={setColor}></button>
                            <button onClick={setColor}></button>
                            <button onClick={setColor}></button>
                        </div>

                        <div className='action-buttons'>
                            <div className='increase-decrease'>
                                <button id='decrease' onClick={decrease}>-</button>
                                <p id='quant'>{val}</p>
                                <button id='increase' onClick={increase}>+</button>
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
                                <dd>{props.tag}</dd>
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
                <p>{props.longDescription}</p>
            </div>
        </section>
    )
}