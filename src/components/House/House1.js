import React from 'react';
import Gallery from './Gallery';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

const container = {
    position: "relative",
    display: "block",
    width: "80%"
}
const cardStyle = {
    position: "relative",
    left: "25%",
    top: "0",
    width: "75%",
    height: "100%",
}
export default function House () {
    return (
        <div className="mb-2" style={ container }>
            <Gallery />
            <div style={ cardStyle }>
                <div className="card text-center">
                    <div className="card-header">
                        <Header />
                    </div>
                    <div className="card-body">
                        <Body />
                    </div>
                    <div className="card-footer text-muted">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
