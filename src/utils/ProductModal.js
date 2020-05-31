import React, { Component } from 'react';
import {ReviewStar} from '../utils/ReviewStart';

export default class ProductModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className={"modal " + this.props.modalClass} id="quick_view">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="close" data-dismiss="modal"><i className="icofont-close"></i></button>
                        <div className="modal-body">
                            <div className="product-details-inner">
                                <div className="row align-items-center">
                                    <div className="col-lg-5 col-12">
                                        <div className="thumb text-center">
                                            <div className="pro-thumb">
                                                <img src={this.props.detail.img} alt="shop"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="product-content">
                                            <h5><a href="shop-page.html#">{this.props.detail.product_name}</a></h5>
                                            <p>
                                                <ReviewStar star={this.props.detail.product_review} />
                                            </p>
                                            <h6>₹{this.props.detail.product_price}</h6>
                                            <p>{this.props.detail.summary}</p>
                                        </div>
                                        <div className="cart-button">
                                            <div className="cart-plus-minus">
                                                <div className="dec qtybutton">-</div>
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="0"></input>
                                                <div className="inc qtybutton">+</div>
                                            </div>
                                            <a href="shop-page.html#" className="lab-btn"><span>Add to Cart</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
