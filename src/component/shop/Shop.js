import React, { Component } from 'react'
import ProductList from './ProductList'
import FilterProductOpt from './FilterProductOpt'

export default class Shop extends Component {
    render() {
        return (
            <div>
                <section className="shop-page padding-tb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <ProductList/>
                            <FilterProductOpt/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
