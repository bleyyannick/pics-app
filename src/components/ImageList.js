import React from "react";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <div key={image.id}>
      <ImageShow image={image} />
    </div>
  ));
  return <div>{renderedImages}</div>;
}

export default ImageList;
