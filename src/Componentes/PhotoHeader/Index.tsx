import React from "react";


interface ImageProps {
    foto: string
}

const Image: React.FC<ImageProps> = ({ foto }) => {

    return (
        <figure>
            <img src={foto} alt="Foto da Narita" />
        </figure>
    )
}

export default Image;



