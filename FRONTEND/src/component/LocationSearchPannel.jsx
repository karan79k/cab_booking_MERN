import { MapPin } from 'lucide-react'
import React from 'react'

const LocationSearchPannel = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-full pr-4'>
                <div className="flex  items-center 
                hover:bg-gray-100/80 transition-all cursor-pointer">
                <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                <p className="text-sm text-gray-600">21 street ,mumbai </p>
              </div>
                <div className="flex  items-center
                    hover:bg-gray-100/80 transition-all cursor-pointer">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <p className="text-sm text-gray-600">21 street ,mumbai </p>
                    </div>
    
    
    </div>
  )
}

export default LocationSearchPannel