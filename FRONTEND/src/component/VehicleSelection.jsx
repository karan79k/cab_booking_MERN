import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, X } from 'lucide-react'; // Add X import

const VehicleSelection = ({ setVehiclePanel }) => { // Add setVehiclePanel prop
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  
  const vehicleRides = [
    {
      id: 1,
      name: 'EasyGo Taxi',
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_520,w_921/v1709190311/assets/f9/453c50-4b40-4527-ac78-5d0714be3866/original/UberTaxi_16.9%281%29.png',
      price: 15.0,
      time: '4 min',
      description: 'Affordable rides for everyday',
      capacity: 4
    },
    {
      id: 2,
      name: 'Moto',
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png',
      price: 23.0,
      time: '5 min',
      description: 'Luxury vehicles, top-rated drivers',
      capacity: 4
    },
    {
      id: 3,
      name: 'EasyAuto',
      image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png',
      price: 28.0,
      time: '8 min',
      description: 'Extra space for groups',
      capacity: 6
    },
  ];

  const handleClose = () => {
    setVehiclePanel(false);
  };

  return (
    <div className="bg-white rounded-t-3xl shadow-lg p-4 z-50 relative">
      {/* Add close button */}
      <button 
        onClick={handleClose}
        className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <X size={24} className="text-gray-600" />
      </button>

      <h3 className="text-lg font-semibold mb-4">Choose your ride</h3>
      <div className="space-y-2">
        {vehicleRides.map((vehicle) => (
          <motion.div
            key={vehicle.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedVehicle(vehicle.id)}
            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all
              ${selectedVehicle === vehicle.id 
                ? 'bg-black text-white' 
                : 'hover:bg-gray-50 border border-gray-100'}`}
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-18 flex-shrink-0">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="rounded-xl object-contain"
                  style={{ filter: selectedVehicle === vehicle.id ? 'brightness(0.8)' : 'none' }}
                />
                <div className={`absolute -bottom-1 -right-1 flex items-center text-xs px-1.5 py-0.5 rounded-full
                  ${selectedVehicle === vehicle.id 
                    ? 'bg-white text-black' 
                    : 'bg-gray-100 text-gray-600'}`}>
                  <Users size={10} className="mr-0.5" />
                  {vehicle.capacity}
                </div>
              </div>
              <div>
                <h4 className="text-[18px] font-semibold font-sans">{vehicle.name}</h4>
                <p className={`text-sm ${selectedVehicle === vehicle.id ? 'text-gray-300' : 'text-gray-500'}`}>
                  {vehicle.description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold pl-[10px]">₹{vehicle.price}</p>
              <p className={`text-sm  ${selectedVehicle === vehicle.id ? 'text-gray-300' : 'text-gray-500'}`}>
                {vehicle.time}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <button 
        className={`w-full py-3 rounded-xl mt-4 font-medium transition-all
          ${selectedVehicle 
            ? 'bg-black text-white hover:bg-gray-900' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
      >
        {selectedVehicle ? 'Confirm Ride' : 'Select a ride type'}
      </button>
    </div>
  );
};

export default VehicleSelection;