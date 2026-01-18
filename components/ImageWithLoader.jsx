import { useState } from "react";
import loaderImage from "../src/assets/loading.jpg";

function ImageWithLoader({ src, alt, className }) {
  const [currentSrc, setCurrentSrc] = useState(loaderImage);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onLoad={() => {
        if (currentSrc === loaderImage) {
          setCurrentSrc(src);
        }
      }}
    />
  );
}

export default ImageWithLoader;
