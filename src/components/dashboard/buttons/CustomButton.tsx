type ButtonProp = {
    text: string;
    className: string;
    icon?: string | React.ReactNode;
    disabled?: boolean;
    type?: "submit" | "reset" | "button"
};

export const CustomButton = ({
  text,
  type,
  className,
  icon,
  disabled,
}: ButtonProp) => {
  return (
    <button type={type} className={className} disabled={disabled}>
      {icon} <span>{text}</span>
    </button>
  );
};
