import React from 'react';

export default function Project({ title, image, description, link }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>{description}</p>
            <a href={link}>Link to {title}</a>
        </div>
    )
}