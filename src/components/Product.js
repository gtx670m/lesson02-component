import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12  col-sm-12  col-md-12  col-lg-12" >
                    <div className="thumbnail" style={{ width: 150 }}>
                        <img className="card-img-top" src="https://cdn1.tgdd.vn/Products/Images/42/87846/iphone-6s-plus-32gb-hh-600x600.jpg" alt="" style={{ width: 100 }} />
                        <div className="card-body">
                            <h5 className="card-title">iPhone 6s plus</h5>
                            <p className="card-text">13.000.000đ</p>
                        </div>
                        <a className="btn btn-primary">Buy</a>
                        <a className="btn btn-default">Detail</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
