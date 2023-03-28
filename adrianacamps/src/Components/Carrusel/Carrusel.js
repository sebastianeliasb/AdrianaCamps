import React from "react";
//style
import "./style/carrusel.scss";

function Carrusel({data}) {
    return (
        <>
            <div className="carrusel">
                {data[0]?.carrouselImages.map((home, index) => (
                    <div key={index} className="project-content-box">
                        <div
                            className="project-image"
                            style={{
                                backgroundImage: `url(${home}) `,
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="backdrop"/>
        </>
    );
}

export default Carrusel;
