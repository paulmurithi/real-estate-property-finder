import React from 'react'

export default function Agent ( props ) {
    const image = props.image;
    return (
        <div>
            <img src={ image } alt="..." />
        </div>
    )
}
