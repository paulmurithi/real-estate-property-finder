import React from 'react'

const galleryStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "25%",
    height: "100%",
}
const imageStyle = {
    width: "100%",
    height: "100%"
}

export default function Gallery () {
    return (
        <div className="images" style={ galleryStyle } >
            <img src="..," style={ imageStyle } alt="..." />
        </div>
    )
}
