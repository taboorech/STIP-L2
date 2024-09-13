import classNames from "classnames";

interface InputProps {
  className?: string;
  [key: string]: any;
}

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={classNames("px-4 py-2 rounded-lg border", className)}
      {...rest}
    />
  )
};

export default Input;