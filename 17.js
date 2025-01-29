import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const images = [
  "/PIC/shose.jpg", // First image
    "/PIC/MEN.png"  
  ];

  // Change image every 5 seconds with fade-in and zoom-in effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setIsFading(false);
      }, 100); // Duration of fade effect
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div
      className={`h-screen bg-cover bg-center transition-all duration-1000 ease-in-out transform ${isFading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="flex flex-col items-start justify-center h-full relative z-10 text-left text-white px-8">
        {/* Stylish h1 */}
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          STYLISH
          <br />
          COMFORTABLE
          <br />
          SUSTAINABLE
        </h1>

        {/* Button */}
        <Link to="/collection"><button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
          GO TO COLLECTION
        </button></Link>
      </div>

      <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Shop By Category</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Men Category */}
          <div className="relative group">
          <Link to="/men">
        <img
          src="/PIC/MEN.png" // Ensure this image is in the public folder
          alt="Men"
          className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 right-0 flex justify-center items-start py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h3 className="text-white text-2xl font-semibold">Men</h3>
        </div>
      </Link>
</div>


          {/* Women Category */}
          <div className="relative group">
            <Link to={"/women"}>
            <img
              src="/PIC/WOMEN.jpg"
              alt="Women"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 right-0 flex justify-center items-start py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold">Women</h3>
            </div>
            </Link>
          </div>

          {/* Different Categories */}
          <div className="relative group">
          <Link to={"/brand"}>
            <img
              src="/PIC/TREND.jpg" // Ensure you have this image in the public folder
              alt="Different Categories"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 right-0 flex justify-center items-start py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h3 className="text-white text-2xl font-semibold">TRENDING</h3>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



