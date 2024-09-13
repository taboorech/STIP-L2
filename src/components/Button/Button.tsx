import classNames from "classnames";
import { ReactNode } from "react";

interface ButtonProps {
  children: string | ReactNode | ReactNode[];
  className?: string;
  [key: string]: any;
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button className={classNames('px-4 py-2 shadow-md rounded-lg', className)} {...rest}>
      { children }
    </button>
  )
};

export default Button;