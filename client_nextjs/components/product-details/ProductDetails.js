import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { addToCart, addQuantityWithNumber } from '../../store/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: true,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause:true,
    navText: [
        "<i class='icofont-bubble-left'></i>",
        "<i class='icofont-bubble-right'></i>"
    ]
}

export class ProductDetails extends Component {

    state = {
        display: false,
        qty: 1,
        max: 10,
        min: 1
    }

    handleAddToCartFromView = () => {
        this.props.addQuantityWithNumber(8, this.state.qty); 

        toast.success('Added to the cart', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
    }

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

    IncrementItem = () => {
        this.setState(prevState => {
            if(prevState.qty < 10) {
                return {
                    qty: prevState.qty + 1
                }
            } else {
                return null;
            }
        });
    }

    DecreaseItem = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                return {
                    qty: prevState.qty - 1
                }
            } else {
                return null;
            }
        });
    }

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "inactive");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className = "active";
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <section className="shop-details-area ptb-120">
                <ToastContainer />
                <div className="container">
                    <div className="shop-details">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-4 col-md-12">
                                {this.state.display ? <OwlCarousel 
                                    className="product-img-slides owl-carousel owl-theme"
                                    {...options}
                                >
                                    <div className="product-img">
                                        <a href="#"><img src={require("../../images/shop-image/1.jpg")} alt="product-img" /></a>
                                    </div>

                                    <div className="product-img">
                                        <a href="#"><img src={require("../../images/shop-image/2.jpg")} alt="product-img" /></a>
                                    </div>

                                    <div className="product-img">
                                        <a href="#"><img src={require("../../images/shop-image/3.jpg")} alt="product-img" /></a>
                                    </div>
                                </OwlCarousel> : ''}
                            </div>

                            <div className="col-lg-8 col-md-12">
                                <div className="product-entry-summary">
                                    <h3>Gold Buyer's Survival Manual</h3>
                                    <h4><span>$44.00</span> $30.00</h4>

                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                    <form onClick={this.handleSubmit}>
                                        <div className="input-counter">
                                            <span 
                                                className="minus-btn"
                                                onClick={this.DecreaseItem}
                                            >
                                                <i className="icofont-minus"></i>
                                            </span>
                                            <input 
                                                type="text" 
                                                value={this.state.qty}
                                                min={this.state.min}
                                                max={this.state.max} 
                                                onChange={e => this.setState({ qty: e.target.value })}
                                            />
                                            <span 
                                                className="plus-btn"
                                                onClick={this.IncrementItem}
                                            >
                                                <i className="icofont-plus"></i>
                                            </span>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="btn btn-primary"
                                            onClick={this.handleAddToCartFromView}
                                        >
                                            Add to Cart
                                        </button>
                                    </form>

                                    <ul className="share-social">
                                        <li>Share:</li>
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icofont-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="shop-details-tabs">
                                    <ul id="tabs">
                                        <li 
                                            className="active" 
                                            id="tab_1"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                            Description
                                        </li>
                                        <li 
                                            className="inactive" 
                                            id="tab_2"
                                            onClick={(e) => this.openTabSection(e, 'tab2')}
                                        >
                                            Review
                                        </li>
                                    </ul>
                                    <div id="tab1" className="tabs_item content show">
                                        <div className="shop-description">
                                            <h3>Description</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>

                                    <div id="tab2" className="tabs_item content">
                                        <div className="shop-reviews">
                                            <h3>Reviews</h3>
                                            <p>There are no reviews yet.</p>
                                            <b>Be the first to review “Make a Presentation”</b>
                                            <p>Your Rating</p>

                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                        <i className="icofont-star"></i>
                                                    </a>
                                                </li>
                                            </ul>

                                            <form className="review-form">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                    <div className="form-group">
                                                            <textarea name="review-message" id="message" cols="30" rows="4" placeholder="Your Review.." className="form-control" />
                                                    </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" placeholder="Name" className="form-control" />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input type="email" placeholder="Email" className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="shop-related-prodcut">
                    <div className="container">
                        <div className="section-title">
                            <h2>Related Products</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-product">
                                    <div className="product-image">
                                        <a href="#"><img src={require("../../images/shop-image/1.jpg")} alt="image" /></a>
                                    </div>

                                    <div className="product-content">
                                        <h3><a href="#">Pencil</a></h3>

                                        <ul className="rating">
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                        </ul>

                                        <span className="price">$99.00</span>

                                        <Link href="#">
                                            <a 
                                                className="btn btn-primary"
                                                onClick={(e) => {
                                                    e.preventDefault(); this.handleAddToCart(1)
                                                }}
                                            >
                                                Add to Cart
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-product">
                                    <div className="product-image">
                                        <a href="#"><img src={require("../../images/shop-image/2.jpg")} alt="image" /></a>
                                    </div>

                                    <div className="product-content">
                                        <h3><a href="#">T-Shirt</a></h3>

                                        <ul className="rating">
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                        </ul>

                                        <span className="price">$120.00</span>

                                        <Link href="#">
                                            <a 
                                                className="btn btn-primary"
                                                onClick={(e) => {
                                                    e.preventDefault(); this.handleAddToCart(2)
                                                }}
                                            >
                                                Add to Cart
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="single-product">
                                    <div className="product-image">
                                        <a href="#"><img src={require("../../images/shop-image/3.jpg")} alt="image" /></a>
                                    </div>

                                    <div className="product-content">
                                        <h3><a href="#">Casual Shoe</a></h3>

                                        <ul className="rating">
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                            <li><i className="icofont-star"></i></li>
                                        </ul>

                                        <span className="price">$160.00</span>

                                        <Link href="#">
                                            <a 
                                                className="btn btn-primary"
                                                onClick={(e) => {
                                                    e.preventDefault(); this.handleAddToCart(3)
                                                }}
                                            >
                                                Add to Cart
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps= (dispatch)=>{
    return {
        addQuantityWithNumber: (id, qty) => {dispatch(addQuantityWithNumber(id, qty))},
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ProductDetails)
