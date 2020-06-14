import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="cat-product">Product</th>
                                        <th className="cat-price">Price</th>
                                        <th className="cat-quantity">Quantity</th>
                                        <th className="cat-toprice">Total</th>
                                        <th className="cat-edit">Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="product-item cat-product">
                                            <div className="p-thumb">
                                                <a href="cart-page.html#"><img src="http://demos.codexcoder.com/labartisan/html/covid-19/assets/images/shop/01.jpg" alt="product"></img></a>
                                            </div>
                                            <div className="p-content">
                                                <a href="cart-page.html#">Product Text Here</a>
                                            </div>
                                        </td>
                                        <td className="cat-price">$250</td>
                                        <td className="cat-quantity">
                                            <div className="cart-plus-minus">
                                                <div className="dec qtybutton">-</div>
                                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="3" />
                                                <div className="inc qtybutton">+</div>
                                            </div>
                                        </td>
                                        <td className="cat-toprice">$750</td>
                                        <td className="cat-edit">
                                            <a href="cart-page.html#"><img src="assets/images/shop/del.png" alt="product"></img></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
