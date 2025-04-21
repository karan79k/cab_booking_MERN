import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowDown, MapPin, Navigation, Clock, Search, X } from 'lucide-react';
import LocationSearchPannel from '../component/LocationSearchPannel';
import Logo from './logo';

export default function Home() {
  const [inputFocused, setInputFocused] = useState(false);
  const formRef = useRef(null);
  const lineRef = useRef(null);
  const arrowRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // Animate line and arrow when component mounts
    gsap.from(lineRef.current, {
      height: 0,
      duration: 0.8,
      ease: "power2.inOut"
    });

    gsap.from(arrowRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      ease: "back.out(1.7)"
    });

    // Animate icons
    gsap.to(iconRef.current, {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "none"
    });
  }, []);

  const handleFocus = () => {
    setInputFocused(true);
    gsap.to(formRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power2.inOut"
    });
  };

  const handleClose = () => {
    setInputFocused(false);
    gsap.to(formRef.current, {
      y: "auto",
      duration: 0.6,
      ease: "power2.inOut"
    });
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
   
      /* Background Image */
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="background"
            className="w-full h-full object-cover brightness-90"
          />
        </div>
     

        <motion.div
          ref={formRef}
          initial={{ y: "auto" }}
          animate={{ 
            y: inputFocused ? 0 : "auto",
            height: inputFocused ? '100%' : 'auto'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`absolute ${inputFocused ? 'top-0' : 'bottom-0'} w-full 
            ${!inputFocused ? 'bg-white/95 backdrop-blur-sm rounded-t-[2.5rem] shadow-lg' : 'bg-white'}
            p-6 shadow-[0_-8px_25px_-4px_rgba(0,0,0,0.1)]`}
          style={{
            clipPath: !inputFocused ? 'inset(0 0 0 0 round 2.5rem 2.5rem 0 0)' : 'none'
          }}
        >
          {inputFocused && (
            <button 
          onClick={handleClose}
          className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
          <X size={24} className="text-gray-600" />
            </button>
          )}

          <h2 className="text-xl font-bold text-center mb-6">Find the ride</h2>
          <form onSubmit={(e) => e.preventDefault()} className="relative space-y-4">
            {/* Connecting Line with gradient */}
          <div 
            ref={lineRef}
            className="absolute left-[22px] top-[30px] w-0.5 h-16 bg-gradient-to-b from-green-500 via-yellow-500 to-red-500 -z-10"
          />
          
          <div 
            ref={arrowRef}
            className="absolute left-[18px] top-[50px] text-gray-600 z-10"
          >
          </div>
          
          <div className="relative group">
            <div className="absolute left-5 top-[18px] w-3 h-3 rounded-full bg-green-500 z-10 animate-pulse" />
            <input
              type="text"
              placeholder="Pickup location"
              onFocus={handleFocus}
              className="w-full pl-12 pr-12 py-3 text-sm rounded-xl border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50/80
                transition-all duration-300"
            />
            
          </div>
          
          <div className="relative group">
            <div className="absolute left-5 top-[18px] w-3 h-3 rounded-full bg-red-500 z-10 animate-pulse" />
            <input
              type="text"
              placeholder="Where to?"
              onFocus={handleFocus}
              className="w-full pl-12 pr-12 py-3 text-sm rounded-xl border border-gray-200 
                focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50/80
                transition-all duration-300"
            />
           
          </div>

          {inputFocused && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 space-y-2"
            >
              <div className="flex items-center px-3 py-2 backdrop-blur-sm rounded-xl 
                hover:bg-gray-100/80 transition-all cursor-pointer">
               
                <p className="text-sm text-gray-600"><LocationSearchPannel/></p>
              </div>
             
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
