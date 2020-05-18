import React from "react";
import "./3d.css";
import { Link } from "react-router-dom";



export default function ThreeDNeon() {
  return (
    <>
      <div className="roles">
     
        <div className="conta">
        <h1 style={
              { 
                textAlign: "center",
                color: "white",
                paddingBottom: "20px"
                }}>Elige tu rol</h1>
                <div>
                  <Link to="/home">
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Desarrollador
          </a>
        </Link>
        <Link to="/home">
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Diseñador
          </a>
        </Link>
        <Link to="/home">
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Empleador
          </a>
        </Link>
                </div>
          
        </div>
        
      </div>
    </>
  );
}
