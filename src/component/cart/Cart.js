import React, { Component } from 'react'
import { connect } from 'react-redux';
class Cart extends Component {
    constructor(props) {
        super(props)




    }

    componentDidMount() {
        setTimeout(() => {
            console.log("-->", this.props.cartProduct);
        }, 2000)


     


    }

    render() {

let productList = this.props.cartProduct.map((d,index)=>{

    return(
        <tr key={index}>
        <td className="product-item cat-product">
            <div className="p-thumb">
                <a href="cart-page.html#"><img src={d.img} alt="product"></img></a>
            </div>
            <div className="p-content">
    <a href="cart-page.html#">{d.product_name}</a>
            </div>
        </td>
    <td className="cat-price">$ {d.product_price}</td>
        <td className="cat-quantity">
            <div className="cart-plus-minus">
                <div className="dec qtybutton">-</div>
                <input className="cart-plus-minus-box" type="text" name="qtybutton" value={3} />
                <div className="inc qtybutton">+</div>
            </div>
        </td>
        <td className="cat-toprice">${d.product_price}</td>
        <td className="cat-edit">
            <a href="cart-page.html#"><img src="assets/images/shop/del.png" alt="product"></img></a>
        </td>
    </tr>


    )
})



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
                                    {productList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartProduct: state.cart.product
    }
}

export default connect(mapStateToProps)(Cart)