import React from 'react'
import horizontonal from '../../assets/images/logo/horizontal.png'
import vertical from '../../assets/images/logo/vertical.png'

type LogoProps = {
  isVertical?: boolean;
};



const Logo = ({ isVertical = false }: LogoProps) => (
  <div className="flex-shrink-0">
    <img
      className={`w-auto ${isVertical ? "h-20" : "h-8"}`}
      src={isVertical ? vertical : horizontonal}
      alt="Logo"
    />
  </div>
);

export default Logo