import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <div className="row">
                    <div className="col-xs- col-sm- col-md- col-lg-">
                        <Product />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-xs- col-sm- col-md- col-lg-">
                        <Product />
                    </div>
                </div>                                                  
            </div>
        );
    }
}

export default App;
