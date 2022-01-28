import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <React.Fragment>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>{this.props.statusCode} </h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Error;
