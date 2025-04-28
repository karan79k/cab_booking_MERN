import React from 'react';
import { X, MapPin, DollarSign } from 'lucide-react';

const ConfirmRide = ({ vehicle, onBack }) => {
  if (!vehicle) {
    return <div>No vehicle selected!</div>;
  }

  return (
    <div className="p-4 bg-white rounded-t-3xl  relative max-w-md mx-auto">
      {/* Back button */}
      <button 
        onClick={onBack}
        className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <X size={24} className="text-gray-600" />
      </button>

      {/* Vehicle Image */}
      <div className="flex justify-center mb-4">
        <img src={vehicle.image} alt={vehicle.name} className="w-30 h-30 rounded-lg object-contain" />
      </div>

      {/* Ride Details */}
      <div className="space-y-6">
        {/* Pickup Location */}
        <div className="flex items-start space-x-3">
          <MapPin size={20} className="text-gray-500 mt-1" />
          <div>
            <p className="text-[17px] font-semibold">562/11-A</p>
            <p className="text-sm text-gray-500">Kaikondrahalli, Bengaluru, Karnataka</p>
          </div>
        </div>

        {/* Drop-off Location */}
        <div className="flex items-start space-x-3">
          <MapPin size={20} className="text-gray-500 mt-1" />
          <div>
            <p className="text-[17px] font-semibold">Third Wave Coffee</p>
            <p className="text-sm text-gray-500">
              17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru, Karnataka
            </p>
          </div>
        </div>

        {/* Fare and Payment */}
        <div className="flex items-start space-x-3">
          <DollarSign size={20} className="text-gray-500 mt-1" />
          <div>
            <p className="text-[19px] font-semibold">₹{vehicle.price}</p>
            <p className="text-sm text-gray-500">Cash</p>
          </div>
        </div>
      </div>

      {/* Confirm Ride Button */}
      <button className="mt-6 w-full bg-black text-white py-3 rounded-lg text-[18px] font-medium hover:bg-gray-800 transition-colors">
        Confirm Ride
      </button>
    </div>
  );
};

export default ConfirmRide;