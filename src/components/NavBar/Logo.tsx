import React from 'react'
import horizontonal from '../../assets/images/logo/horizontal.png'

const Logo = () => (
    <div className="flex-shrink-0">
      {/* <img className="h-8 w-8" src="" alt="Logo" /> */}
      <img className="h-8 w-auto" src={horizontonal} alt="Logo" />
    </div>
  );
  

export default Logo