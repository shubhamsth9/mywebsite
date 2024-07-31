// This component is no longer used
// It's a failed attempt at creating a lottie animation as background

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../styles/bgLottie.json';


const BgAnimation = ({children}) => {
    return(
        <div className='main-container'>
            <div className='lottie-container'>
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{
                        
                        width: '100%',
                        height: '100%',
                    }}
                    />
                    <div className='content-container'>
                        {children}
                    </div>
            </div>
        </div>
    )
}

export default BgAnimation;