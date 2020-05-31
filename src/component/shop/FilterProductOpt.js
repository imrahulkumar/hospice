import React, { Component } from 'react';
import { filter as filters } from '../../utils/utility.ts';
import { latestProd } from '../../utils/utility';
import {ReviewStar} from '../../utils/ReviewStart'

export default class FilterProductOpt extends Component {
    render() {

        const filter = filters.map((d,index) => {
            return (
                <li key={index}><a href="shop-page.html#">{d.filterHeading}</a>
                    <ul className="shop-submenu lab-ul">
                        {d.filter.map((r,index) => {
                            return (
                                <li key={index + 'abc'}><a href="shop-page.html#">{r.name}</a></li>
                            )
                        })}
                    </ul>
                </li>
            )
        })

        const latestProduct = latestProd.map((d,index) => {
            return (
                <li key={index}>
                    <div className="product-thumb">
                        <img src={d.img} alt="shop"></img>
                    </div>
                    <div className="product-content">
                        <h6><a href="shop-page.html#">{d.product_name}</a></h6>
                        <p><ReviewStar star={d.product_review}/> <span>({d.product_review} review)</span></p>
                        <h6>${d.product_price}</h6>
                    </div>
                </li>
            )
        })

        return (
            <div className="col-lg-3 col-md-7 col-12">
                <aside>
                    <div className="widget widget-search">
                        <form action="/" className="search-wrapper">
                            <input type="text" name="s" placeholder="Search..." />
                            <button type="submit"><i className="icofont-search-2"></i></button>
                        </form>
                    </div>

                    <div className="widget shop-widget">
                        <div className="widget-header">
                            <h5>All Categories</h5>
                        </div>
                        <div className="widget-wrapper">
                            <ul className="shop-menu lab-ul">
                                {filter}
                            </ul>
                        </div>
                    </div>

                    <div className="widget letest-product">
                        <div className="widget-header">
                            <h5>Latests Products</h5>
                        </div>
                        <div className="widget-wrapper">
                            <ul className="lab-ul">
                                {latestProduct}
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        )
    }
}
