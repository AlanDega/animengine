import React, { useState } from 'react'
import "./logos.css";

const purple = "#6100FF"
const gray = "#636E7D"


export default function Logo4() {
    const [Hovered4, setHovered4] = useState(false);
   

    return (
        <div>
            <div className="icons">
            <svg
                onMouseEnter={() => setHovered4(true)}
                onMouseLeave={() => setHovered4(false)}
                width="20" height="20" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.2625V31.3035H8.6235V36H13.332L18.033 31.302H25.0905L34.5015 21.915V0H2.3505L0 6.2625ZM5.487 3.1275H31.365V20.346L25.875 25.824H17.2485L12.5475 30.5145V25.824H5.487V3.1275Z"
                    fill={Hovered4 ? purple : gray} />
                <path d="M14.115 9.39294H17.25V18.7829H14.115V9.39294Z"
                    fill={Hovered4 ? purple : gray} />
                <path d="M22.7368 9.39294H25.8733V18.7829H22.7368V9.39294Z"
                    fill={Hovered4 ? purple : gray} />
            </svg>
            </div>

           
        </div>
    )
}
