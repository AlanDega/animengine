import React, { useState } from 'react'
import "./logos.css";

const purple = "#6100FF"
const gray = "#636E7D"


export default function Logo3() {
    const [Hovered3, setHovered3] = useState(false);
   

    return (
        <div>
            <div className="icons">
            <svg
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
                width="20" height="20" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <path d="M34.9658 10.2901C34.8838 8.43041 34.5831 7.15189 34.1523 6.04404C33.7078 4.86809 33.0241 3.81525 32.1283 2.94003C31.2531 2.05118 30.1933 1.36051 29.031 0.923032C27.9167 0.49223 26.6449 0.191497 24.7852 0.109503C22.9116 0.0205652 22.3168 0 17.5649 0C12.813 0 12.2182 0.0205652 10.3516 0.102559C8.49193 0.184553 7.21342 0.485553 6.10583 0.916088C4.92961 1.36051 3.87677 2.04424 3.00155 2.94003C2.1127 3.81525 1.4223 4.87503 0.984555 6.03737C0.553754 7.15189 0.25302 8.42347 0.171027 10.2832C0.0820886 12.1567 0.0615234 12.7515 0.0615234 17.5034C0.0615234 22.2553 0.0820886 22.8501 0.164082 24.7167C0.246076 26.5764 0.547076 27.8549 0.977878 28.9628C1.4223 30.1388 2.1127 31.1916 3.00155 32.0668C3.87677 32.9557 4.93655 33.6463 6.09889 34.0838C7.21342 34.5146 8.48499 34.8153 10.3449 34.8973C12.2113 34.9796 12.8064 34.9999 17.5583 34.9999C22.3102 34.9999 22.905 34.9796 24.7716 34.8973C26.6313 34.8153 27.9098 34.5146 29.0174 34.0838C31.3695 33.1744 33.2292 31.3147 34.1386 28.9628C34.5692 27.8483 34.8702 26.5764 34.9522 24.7167C35.0342 22.8501 35.0547 22.2553 35.0547 17.5034C35.0547 12.7515 35.0478 12.1567 34.9658 10.2901ZM31.814 24.58C31.7387 26.2893 31.4515 27.2123 31.2122 27.8277C30.6241 29.3525 29.414 30.5626 27.8892 31.1507C27.2739 31.39 26.3442 31.6771 24.6415 31.7522C22.7954 31.8345 22.2418 31.8547 17.5719 31.8547C12.902 31.8547 12.3414 31.8345 10.502 31.7522C8.79266 31.6771 7.86963 31.39 7.25428 31.1507C6.4955 30.8703 5.80483 30.4259 5.24423 29.8447C4.66306 29.2772 4.21864 28.5934 3.9382 27.8346C3.6989 27.2193 3.41179 26.2893 3.33674 24.5869C3.25448 22.7409 3.23418 22.187 3.23418 17.517C3.23418 12.8471 3.25448 12.2865 3.33674 10.4474C3.41179 8.73809 3.6989 7.81506 3.9382 7.1997C4.21864 6.44066 4.66306 5.75025 5.25117 5.18938C5.81845 4.60822 6.50218 4.16379 7.26122 3.88362C7.87658 3.64432 8.80655 3.35721 10.5089 3.28189C12.355 3.1999 12.9089 3.17933 17.5786 3.17933C22.2554 3.17933 22.8091 3.1999 24.6485 3.28189C26.3578 3.35721 27.2808 3.64432 27.8962 3.88362C28.6549 4.16379 29.3456 4.60822 29.9062 5.18938C30.4874 5.75693 30.9318 6.44066 31.2122 7.1997C31.4515 7.81506 31.7387 8.74477 31.814 10.4474C31.896 12.2935 31.9165 12.8471 31.9165 17.517C31.9165 22.187 31.896 22.7339 31.814 24.58Z"
                        fill={Hovered3 ? purple : gray} />
                    <path d="M17.565 8.51233C12.6013 8.51233 8.57397 12.5394 8.57397 17.5033C8.57397 22.4673 12.6013 26.4944 17.565 26.4944C22.529 26.4944 26.556 22.4673 26.556 17.5033C26.556 12.5394 22.529 8.51233 17.565 8.51233ZM17.565 23.3356C14.3448 23.3356 11.7327 20.7238 11.7327 17.5033C11.7327 14.2829 14.3448 11.6711 17.565 11.6711C20.7855 11.6711 23.3972 14.2829 23.3972 17.5033C23.3972 20.7238 20.7855 23.3356 17.565 23.3356V23.3356Z"
                        fill={Hovered3 ? purple : gray} />
                    <path d="M29.0107 8.15697C29.0107 9.31611 28.0709 10.256 26.9115 10.256C25.7524 10.256 24.8125 9.31611 24.8125 8.15697C24.8125 6.99758 25.7524 6.05798 26.9115 6.05798C28.0709 6.05798 29.0107 6.99758 29.0107 8.15697V8.15697Z"
                        fill={Hovered3 ? purple : gray} />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="35" height="35" fill={Hovered3 ? purple : gray} />
                    </clipPath>
                </defs>
            </svg>
            </div>

           
        </div>
    )
}
