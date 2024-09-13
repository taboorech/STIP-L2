import classNames from "classnames";

interface BackdropProps {
  isOpen: boolean;
  onClose: () => void;
}

const Backdrop = ({ isOpen, onClose }: BackdropProps) => {
  return (
    <div 
      className={classNames(
        "fixed left-0 bottom-0 top-0 right-0 bg-black opacity-0", 
        "transition-opacity duration-300 ease-in-out",
        isOpen ? 'z-20 opacity-20' : '-z-50'
      )}
      onClick={onClose}
    >
    </div>
  )
};


export default Backdrop;