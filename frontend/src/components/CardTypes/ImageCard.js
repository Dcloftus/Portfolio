import React from 'react';

import './ImageCard.css';

const ImageCard = ({image}) => {
    return (
        <div className='imageCard' style={{backgroundImage:`url(${image})`}} />
    );
}

export default ImageCard;
