import { useEffect, useState } from "react";
import './info.css'

const Section = () => {
  const [establishedIn, setEstablishedIn] = useState(0);
  const [productionCapacity, setProductionCapacity] = useState(0);
  const [manufacturingFacility, setManufacturingFacility] = useState(0);

  useEffect(() => {
    const increaseValues = () => {
      let count = 1110;
      const interval = setInterval(() => {
        count++;
        setEstablishedIn(count);
        if (count === 2023) {
          clearInterval(interval);
        }
      }, 1);

      let count1 = 1570;

      const interval1 = setInterval(() => {
        count1++;
        setProductionCapacity(count1);
        if (count1 === 3000) {
          clearInterval(interval1);
        }
      }, 1);

      let count2 = 2750;

      const interval2 = setInterval(() => {
        count2++;
        setManufacturingFacility(count2);
        if (count2 === 3500) {
          clearInterval(interval2);
        }
      }, 1);
    };

    increaseValues();
  }, []);

  return (
    <div className="bg-[#111111] p-4 lg:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 container mx-auto">
        <div className="flex flex-col items-center justify-center rounded-lg ">
          <img height={200} width={200} src="https://cdn-icons-png.flaticon.com/512/2830/2830931.png"></img>
          <p className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">
            Established In
          </p>
          <p className="text-xl lg:text-2xl text-white">{establishedIn}</p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg p-4">
        <img height={200} width={200} src="https://clinmedjournals.org/articles/ijocr/table-icon.png"></img>
          <p className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">
          Vision Corrected
          </p>
          <p className="text-xl lg:text-2xl text-white">{productionCapacity}</p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg p-4">
        <img height={200} width={200} src="https://cdn-icons-png.flaticon.com/512/2394/2394306.png"></img>
          <p className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">
          Cataract Surgeries
          </p>
          <p className="text-xl lg:text-2xl text-white">
            {manufacturingFacility}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg p-4">
        <img height={200} width={200} src="https://cdn-icons-png.flaticon.com/512/1231/1231600.png"></img>
          <p className="font-bold text-white text-xl lg:text-2xl xl:text-3xl">
          Ocular Surgeries
          </p>
          <p className="text-xl lg:text-2xl text-white">
            {manufacturingFacility}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;