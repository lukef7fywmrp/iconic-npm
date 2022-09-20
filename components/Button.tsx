interface Props {
  text?: string;
  Icon?: any;
  onClick?: () => void;
  buttonColor: string;
  buttonPadding?: string;
  textColor?: string;
  translateX?: string;
}

function Button({
  text,
  Icon,
  onClick,
  buttonColor,
  buttonPadding,
  textColor,
  translateX,
}: Props) {
  return (
    <div
      className={`headerLink  gradientBorder flex items-center justify-center rounded-md p-[2px]`}
      onClick={onClick}
    >
      <button
        className={`group flex w-full items-center justify-center  ${buttonColor} ${
          textColor ? textColor : "text-white/60"
        } px-4 py-2  ${buttonPadding}`}
      >
        {text && (
          <p className="transition-colors duration-300 group-hover:text-white ">
            {text}
          </p>
        )}
        {Icon && (
          <Icon
            className={`h-5 w-5 transition duration-200 group-hover:${translateX} group-hover:text-white `}
          />
        )}
      </button>
    </div>
  );
}

export default Button;
