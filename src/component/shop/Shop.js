import React, { Component } from 'react'
import ProductList from './ProductList'
import FilterProductOpt from './FilterProductOpt'

export default class Shop extends Component {
    render() {
        return (
            <div>
                <section class="shop-page padding-tb">
                    <div class="container">
                        <div class="row justify-content-center">
                            <ProductList/>
                            <FilterProductOpt/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
