import { MapPin, Clock, Star, Building, Home } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'

const LocationSearchPannel = ({ setVehiclePanel, onLocationSelect }) => {
  const [activeLocation, setActiveLocation] = useState(null);
  const panelRef = useRef(null);

  const handleLocationClick = (locationId) => {
    setActiveLocation(locationId);
    setVehiclePanel(true);
    onLocationSelect();
  };

  const locations = [
    {
      id: 1,
      name: 'Mumbai Central Station',
      address: 'Mumbai Central, Mumbai, Maharashtra',
      type: 'transport',
      icon: Clock,
    },
    {
      id: 2,
      name: 'Bandra-Kurla Complex',
      address: 'BKC, Bandra East, Mumbai',
      type: 'work',
      icon: Building,
    },
    {
      id: 3,
      name: 'Juhu Beach',
      address: 'Juhu Tara Road, Mumbai',
      type: 'landmark',
      icon: Star,
    },
    {
      id: 4,
      name: 'Home',
      address: '123 Green Avenue, Andheri West',
      type: 'home',
      icon: Home,
    },
    {
      id: 5,
      name: 'Phoenix Marketcity',
      address: 'Kurla West, Mumbai',
      type: 'mall',
      icon: MapPin,
    }
  ]

  return (
    <div ref={panelRef} className="flex flex-col gap-2 w-full h-full pr-4">
      {locations.map((location) => {
        const Icon = location.icon
        const isActive = activeLocation === location.id
        
        return (
          <div
            key={location.id}
            onClick={() => handleLocationClick(location.id)}
            className={`
              flex items-center p-3 rounded-xl cursor-pointer
              transform transition-all duration-200 ease-out
              ${isActive ? [
                'bg-black/5',
                'border-2 border-black',
                'shadow-sm',
                'scale-[1.02]'
              ].join(' ') : [
                'hover:bg-gray-50',
                'border border-transparent',
                'hover:border-gray-200'
              ].join(' ')}
            `}
          >
            <div className={`
              flex items-center justify-center w-10 h-10 
              rounded-full mr-3 transition-colors
              ${isActive ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}
            `}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className={`
                text-sm font-medium transition-colors
                ${isActive ? 'text-black' : 'text-gray-700'}
              `}>
                {location.name}
              </h3>
              <p className={`
                text-xs transition-colors
                ${isActive ? 'text-black/60' : 'text-gray-500'}
              `}>
                {location.address}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LocationSearchPannel