import React from "react";
import { useLocation } from "react-router";

const visualizerId = () => {
  const location = useLocation();
  const { initialImage, name } = location.state || {};
  return (
    <section>
      <h3>{name || "Untitled Project"}</h3>

      <div className="visualizer">
        {initialImage && (
          <div className="image-container">
            <h2>Source Image</h2>
            <img src={initialImage} alt="source" />
          </div>
        )}
      </div>
    </section>
  );
};

export default visualizerId;
