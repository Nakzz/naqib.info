import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Link from '../../utils/ActiveLink';
import SearchForm from './SearchForm';
import SideDrawer from './SideDrawer';

export class Navbar extends Component {
    _isMounted = false;

    state = {
        drawer: false,
        searchForm: false,
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    handleDrawer = () => {
        this.setState( prevState => {
            return {
                drawer: !prevState.drawer
            };
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        let { pathname } = this.props.router;
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        let layOutCls = '';
        if (pathname == '/creative-blog'){
            layOutCls = 'p-relative';
        }

        return (
            <header id="header">
                <div id="navbar" className={`artflex-nav ${layOutCls}`}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo_full.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                <Link href="/">
                                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                                </Link>
                                     


                                    <li className="nav-item">
                                    <Link activeClassName="active" href="/about-me">
                                                            <a href="#" className="nav-link">About Me</a>
                                                            
                                                        </Link>
                                        
                                        

                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/blog">
                                        <a href="#" className="nav-link">Blog </a>
                                        {/* <ul className="dropdown_menu">
                                            <li className="nav-item"> */}
                                                    {/* <a className="nav-link">Blog</a> */}
                                                </Link>
                                            {/* </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/blog-details">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Portfolio <i className="icofont-simple-down"></i></a>
                                        <ul className="dropdown_menu">
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/portfolio">
                                                    <a className="nav-link">Projects</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link activeClassName="active" href="/portfolio-details">
                                                    <a className="nav-link">Photography</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

              
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>

                                {/* <div className="others-option"> 
                                {/* FIXME: Maybe in the future add searching capabilities 
                                    <ul>
                                        <li>
                                            <span 
                                                className="search-popup-icon"
                                                onClick={this.handleSearchForm}
                                            >
                                                <i className="icofont-ui-search"></i>
                                            </span>
                                        </li>

                                        <li>
                                            <Link href="/cart">
                                                <a className="cart-icon">
                                                    <i className="icofont-bag"></i>
                                                    <span>{products.length}</span>
                                                </a>
                                            </Link>
                                        </li>

                                        <li onClick={this.handleDrawer}>
                                            <div className="side-menu">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                    {/* <SearchForm onClick={this.handleSearchForm} active={this.state.searchForm ? 'active' : ''} />
                    <SideDrawer onClick={this.handleDrawer} show={this.state.drawer ? 'show' : ''} /> */}
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.cartReducer.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(Navbar));