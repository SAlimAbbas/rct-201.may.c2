export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
   
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input className={`input`} type={type} fontSize={size} variant={variant}  onChange={onChange} />
      <img src={rightLogo} alt="" width={10} height={10} style={{marginLeft:"-20px"}}  onClick={rightLogoOnClick} data-testid="cToggle"/>
    </div>
  );
};
