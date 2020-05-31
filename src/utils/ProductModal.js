import React, { Component } from 'react';
import {ReviewStar} from '../utils/ReviewStart';

export default class ProductModal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="modal" id="quick_view">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <button type="button" class="close" data-dismiss="modal"><i class="icofont-close"></i></button>
                        <div class="modal-body">
                            <div class="product-details-inner">
                                <div class="row align-items-center">
                                    <div class="col-lg-5 col-12">
                                        <div class="thumb text-center">
                                            <div class="pro-thumb">
                                                <img src={this.props.detail.img} alt="shop"></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="product-content">
                                            <h5><a href="shop-page.html#">{this.props.detail.product_name}</a></h5>
                                            <p>
                                                <ReviewStar star={this.props.detail.product_review} />
                                            </p>
                                            <h6>₹{this.props.detail.product_price}</h6>
                                            <p>{this.props.detail.summary}</p>
                                        </div>
                                        <div class="cart-button">
                                            <div class="cart-plus-minus">
                                                <div class="dec qtybutton">-</div>
                                                <input class="cart-plus-minus-box" type="text" name="qtybutton" value="0"></input>
                                                <div class="inc qtybutton">+</div>
                                            </div>
                                            <a href="shop-page.html#" class="lab-btn"><span>Add to Cart</span></a>
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
