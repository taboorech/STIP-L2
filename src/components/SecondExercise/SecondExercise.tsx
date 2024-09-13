import React, { useState } from 'react';
import first from '../../assets/1.jpg';
import second from '../../assets/2.jpeg';
import third from '../../assets/3.avif';
import fourth from '../../assets/3.jpeg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { IoIosSwap } from "react-icons/io";

const SecondExercise = () => {

  const [images, setImages] = useState<string[]>([first, second, third, fourth]);
  const [firstImageInput, setFirstImageInput] = useState<number>(1);
  const [secondImageInput, setSecondImageInput] = useState<number>(1);

  const fillImages = images.map((image, index) => 
    <div className="w-[20%] flex flex-col gap-3" key={`image-${image}-${index}`}>
      <img src={image} className="w-full h-[200px] object-cover" />
      <p className='text-center text-xl'>{ index + 1 }</p>
    </div>
  );  

  const changeButtonClickHandler = () => {
    const changedArr = [...images];
    const tmp = changedArr[firstImageInput - 1];
    changedArr[firstImageInput - 1] = images[secondImageInput - 1];
    changedArr[secondImageInput - 1] = tmp;

    setImages(changedArr);
  };

  return(
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-row justify-center gap-[5%]">
        { fillImages }
      </div>
      <div className='flex flex-row justify-around'>
        <Input 
          type="number"
          value={firstImageInput || 1} 
          className='w-1/6'
          min="1"
          max="4"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFirstImageInput(+event.target.value)} 
        />
        <Button className='bg-blue-500 text-white' onClick={changeButtonClickHandler}>
          <IoIosSwap/>
        </Button>
        <Input 
          type="number"
          value={secondImageInput || 1} 
          min="1"
          max="4"
          className='w-1/6'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSecondImageInput(+event.target.value)} 
        />
      </div>
    </div>
  )
};

export default SecondExercise;