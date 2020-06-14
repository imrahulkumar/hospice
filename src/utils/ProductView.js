import React, { Component } from 'react';
import { ReviewStar } from './ReviewStart';

class ProductView extends Component {

    render() {
        const product = this.props.product.map((d, index) => {
            return (

                <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className="product-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={d.img} alt="shop"></img>
                            </div>
                            <div className="product-action-link">
                                <a className="view-modal" data-target="#quick_view" onClick={()=>this.props.productView(d)}><i className="icofont-eye"></i></a>
                                <a href="shop-page.html#"><i className="icofont-heart"></i></a>
                                <a href="shop-page.html#"><i className="icofont-cart-alt"></i></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <h5><a href="shop-page.html#">{d.product_name}</a></h5>
                            
                                <ReviewStar star={d.product_review} />
                           
                            <h6>₹{d.product_price}</h6>
                        </div>
                    </div>
                    <div className="product-list-item">
                        <div className="product-thumb">
                            <div className="pro-thumb">
                                <img src={d.img} alt="shop"></img>
                            </div>
                            <div className="product-action-link">
                                <a className="view-modal" data-target="#quick_view"><i className="icofont-eye"></i></a>
                                <a href="shop-page.html#"><i className="icofont-heart"></i></a>
                                <a href="shop-page.html#"><i className="icofont-cart-alt"></i></a>
                            </div>
                        </div>
                        <div className="product-content">
                            <h5><a href="shop-page.html#">{d.product_name}</a></h5>
                            <ReviewStar star={d.product_review} />
                            <h6>
                                ₹{d.product_price}
                            </h6>
                            <p>{d.summary}</p>
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div className="shop-product-wrap grid row justify-content-center">
                {product}
            </div>
        );
    }
}


export default ProductView;
