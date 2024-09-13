import classNames from "classnames";
import { ReactNode } from "react";

interface TabProps {
  children: string | ReactNode | ReactNode[];
  className?: string;
  [key: string]: any;
}

const Tab = ({ children, className, ...rest }: TabProps) => {
  return (
    <div className={classNames("bg-transparent hover:bg-gray-100 text-xl w-full text-center py-3 cursor-pointer", className)} {...rest}>
      { children }
    </div>
  )
};

export default Tab;