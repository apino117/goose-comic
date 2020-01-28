import React from "react";
import "./style.css";

const Card = ({ title, src, alt }) => {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">
        <div className="container" id="comic-box-container">
          <div className="row" id="comic-row">
            <div className="column" id="comic-column">
              <img className="Comic"
                src={src}
                alt={alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
