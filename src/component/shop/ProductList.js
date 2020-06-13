import React, { Component } from 'react';
import ProductView from '../../utils/ProductView';
import { totalProductList } from '../../utils/utility';
import ProductModal from '../../utils/ProductModal'
import { connect } from 'react-redux';
 class ProductList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            modal:{},
            isModalVisible:false
        }
    }
  

    viewProductDetails=(e)=>{
       this.setState({
           modal:e,
           isModalVisible:true
       })
    }
    
    render() {
        return (
            <div className="col-lg-9 col-12 sticky-widget">
                <div className="shop-title d-flex flex-wrap justify-content-between">
                    <p>Showing 01 - 12 of 139 Results</p>
                    <div className="product-view-mode">
                        <a className="active" data-target="grid"><i className="icofont-ghost"></i></a>
                        <a data-target="list"><i className="icofont-listine-dots"></i></a>
                    </div>
                </div>
                <ProductView product={this.props.productList} productView={this.viewProductDetails} />
                <ProductModal detail={this.state.modal} modalClass={this.state.isModalVisible ? 'show' : 'close'}/>
                <div className="paginations">
                    <ul className="d-flex flex-wrap lab-ul justify-content-center">
                        <li>
                            <a href="shop-page.html#">1</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="shop-page.html#">2</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="shop-page.html#" className="active">3</a>
                        </li>
                        <li>
                            <a className="dot">...</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="shop-page.html#">9</a>
                        </li>
                        <li className="d-none d-sm-block">
                            <a href="shop-page.html#">10</a>
                        </li>
                        <li>
                            <a href="shop-page.html#">11</a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
      productList: state.category.product
    }
  }
  
  export default connect(mapStateToProps)(ProductList)