import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../store/actions/cartActions';

export class ProductsContent extends Component {

    handleAddToCart = (id) => {
        this.props.addToCart(id); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

    render() {

        let { products } = this.props;

        return (
            <section className="product-area ptb-120">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="woocommerce-topbar">
                                <div className="row h-100 align-items-center">
                                    <div className="col-lg-9 col-md-7">
                                        <div className="woocommerce-result-count">
                                            <p>Showing 1–9 of 11 results</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-5">
                                        <div className="woocommerce-topbar-ordering">
                                            <form>
                                                <div className="select-box">
                                                    <select className="form-control">
                                                        <option value="1">Sort by Popularity</option>
                                                        <option value="2">Sort by Average Rating</option>
                                                        <option value="0">Sort by Latest</option>
                                                        <option value="3">Sort by price: Low to High</option>
                                                        <option value="4">Sort by price: High to Low</option>
                                                        <option value="5">Sort by New</option>
                                                    </select>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {products.map((data, idx) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={idx}>
                                <div className="single-product">
                                    <div className="product-image">
                                        <Link href="/shop/product-details">
                                            <a>
                                                <img src={data.image} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="product-content">
                                        <h3>
                                            <Link href="/shop/product-details">
                                                <a>{data.title}</a>
                                            </Link>
                                        </h3>

                                        <ul className="rating">
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                        </ul>

                                        <span className="price">${data.price}</span>

                                        <Link href="#">
                                            <a 
                                                className="btn btn-primary"
                                                onClick={(e) => {
                                                    e.preventDefault(); this.handleAddToCart(data.id)
                                                }}
                                            >
                                                Add to Cart
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-left"></i></a></li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><i className="icofont-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContent)
