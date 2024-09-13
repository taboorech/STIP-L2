import classNames from "classnames";
import { useState } from "react";
import { DropdownItem } from "../../types/dropdown-item.type";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";

interface DropdownProps {
  isOpen: boolean;
  position: DOMRect | null;
  items: DropdownItem[];
}

const Dropdown = ({ isOpen, position, items }: DropdownProps) => {

  const styles = position ? { left: position.left, top: position.top + position.height } : {};
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const itemsFill = items.map((item, index) => 
    <div className="bg-gray-100 cursor-pointer" key={`item-${index}`}>
      <div 
        className="flex flex-row gap-3 bg-white items-center text-lg hover:bg-gray-50 px-4 py-2" 
        onClick={() => setActiveItems(prev => prev.includes(index) ? prev.filter((value) => value !== index) : [...prev, index])}
      >
        { activeItems.includes(index) && <FaChevronDown className={classNames("text-sm", !item.subitems && 'opacity-0')}/>}
        { !activeItems.includes(index) && <FaChevronRight className={classNames("text-sm", !item.subitems && 'opacity-0')}/>}
        { item.item }
      </div>
      {(item.subitems && activeItems.includes(index)) && 
        <div className="bg-transparent">
          { item.subitems.map((subitem, index) => 
            <div className="hover:bg-gray-200 px-4 py-2" key={`subtitle-${subitem}-${index}`}>{ subitem }</div>
          ) }
        </div>
      }
    </div>
  );

  return (
    <div 
      className={classNames("w-3/12 absolute z-30 h-auto bg-white transition-opacity duration-300 ease-in-out mt-2", isOpen ? 'opacity-100' : 'opacity-0')}
      style={styles}
    >
      { itemsFill }
    </div>
  )
};

export default Dropdown;