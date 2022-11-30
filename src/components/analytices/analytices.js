import React from "react";
import laptop from "../../Images/images.jpeg";

function Analytices() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="images" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytices DeshBord</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytices Centerlly
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
            justo vulputate, venenatis arcu nec, consectetur quam. Suspendisse
            sit amet viverra sapien, a pharetra eros. Suspendisse fringilla non
            erat tincidunt faucibus. Aenean sed arcu leo.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 text-black">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytices;
