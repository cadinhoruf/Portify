import { forwardRef, ButtonHTMLAttributes } from "react";
import { ColorType, StyledButton, widthsizeType } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  widthsize: widthsizeType;
  color: ColorType;
  name: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ widthsize, color, name, onClick, type, ...rest }, ref) => {
    return (
      <StyledButton widthsize={widthsize} color={color} type={type} onClick={onClick} ref={ref} {...rest}>
        {name}
      </StyledButton>
    );
  }
);
