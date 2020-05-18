import React from 'react'

/**
 * 
 * @param {src} String
 * @param {fallback} String
 * @example  <ImgWithFallback 
 *              src="/images/cereal.webp" 
 *              fallback="/images/cereal.png" 
 *              alt="A photo showing the expiration date on a box of Lucky Charms" 
 *           />  
 */

const ImgWithFallback = ({
    src,
    fallback,
    type = 'image/webp',
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} {...delegated} />
      </picture>
    );
  };

  export default ImgWithFallback;