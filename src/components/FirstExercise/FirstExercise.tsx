import { useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import Backdrop from "../Backdrop/Backdrop";
import { DropdownItem } from "../../types/dropdown-item.type";

const FirstExercise = () => {

  const [dropdownPosition, setDropdownPosition] = useState<DOMRect | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const dropdownItems: DropdownItem[] = [
    {
      item: 'Item 1',
    },
    {
      item: 'Item 2',
      subitems: [
        'Subitem 1',
        'Subitem 2',
        'Subitem 3',
        'Subitem 4',
        'Subitem 5',
      ]
    },
    {
      item: 'Item 3',
    },
    {
      item: 'Item 4',
      subitems: [
        'Subitem 1',
        'Subitem 2',
        'Subitem 3',
        'Subitem 4',
        'Subitem 5',
      ]
    }
  ];

  const dropdownButtonClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    
    setDropdownPosition(rect);
    setDropdownOpen(true);
  }

  return (
    <div className="p-4">
      <Button className="bg-blue-500 text-white" onClick={dropdownButtonClickHandler}>
        Dropdown
      </Button>
      <Dropdown items={dropdownItems}  position={dropdownPosition} isOpen={dropdownOpen} />
      <Backdrop isOpen={dropdownOpen} onClose={() => setDropdownOpen(false)} />
    </div>
  )
};

export default FirstExercise;