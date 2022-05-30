export const Image = ({ src, alt, borderRadius, width, height, fit }) => {

  return (
    <div>
      <img  src={src} alt={alt} style={{borderRadius,height,width,fit}} />
    </div>
  );
};
