import Link from "next/link";
import React, { useState } from "react";

const images = [
  "00001.jpg",
  "00002.jpg",
  "00003.jpg",
  "00004.jpg",
  "00005.jpg",
  "00006.jpg",
  "00007.jpg",
  "00008.jpg",
  "00009.jpg",
  "00010.jpg",
  "00011.jpg",
  "00012.jpg",
  "00013.jpg",
  "00014.jpg",
  "00015.jpg",
  "00016.jpg",
  "00017.jpg",
  "00018.jpg",
  "00019.jpg",
  "00020.jpg",
  "00021.jpg",
  "00022.jpg",
  "00023.jpg",
  "00024.jpg",
  "00025.jpg",
  "00026.jpg",
  "00027.jpg",
  "00028.jpg",
  "00029.jpg",
  "00030.jpg",
  "00031.jpg",
  "00032.jpg",
  "00033.jpg",
  "00034.jpg",
  "00035.jpg",
  "00036.jpg",
  "00037.jpg",
  "00038.jpg",
  "00039.jpg",
  "00040.jpg",
  "00041.jpg",
  "00042.jpg",
  "00043.jpg",
  "00044.jpg",
  "00045.jpg",
  "00046.jpg",
  "00047.jpg",
  "00048.jpg",
  "00049.jpg",
  "00050.jpg",
  "00051.jpg",
  "00052.jpg",
  "00053.jpg",
  "00054.jpg",
  "00055.jpg",
  "00056.jpg",
  "00057.jpg",
  "00058.jpg",
  "00059.jpg",
  "00060.jpg",
  "00061.jpg",
  "00062.jpg",
  "00063.jpg",
  "00064.jpg",
  "00065.jpg",
  "00066.jpg",
];

function CapturedImages() {
  const [currentImage, setCurrentImage] = useState("00052.jpg");
  return (
    <>
      <div className="w-3/5 p-6">
        <div className="bg-[#E5E8EC] p-4 mb-4">
          <h1 className="font-bold text-gray-600">Captured images</h1>
        </div>
        <div className="h-3/4 overflow-scroll scrollbar-hide">
          <div className="grid grid-cols-8 gap-1">
            {images.map((image, key) => (
              <div className="cursor-pointer" key={key}>
                <img
                  src={`capsule/${image}`}
                  onClick={() => setCurrentImage(image)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/5 p-6">
        <div className="bg-[#F8F8F8]">
          <div className="bg-[#D4E7EE] p-4 mb-2">
            <h1 className="font-bold text-gray-600">Preview Image</h1>
          </div>
          <div className="p-4 pb-0">
            <img className="w-full h-full" src={`capsule/${currentImage}`} />
          </div>
          <p className="p-4 font-bold text-gray-600 text-center">
            Image: {currentImage}
          </p>
        </div>
      </div>
    </>
  );
}

export default CapturedImages;
