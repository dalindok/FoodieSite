import React from 'react';
import PMap from '../../assets/Map/Map.png';

const Map = () => {
    return (
        <div className='font-zain bg-white mt-5'>
            <p className='font-semibold text-4xl mb-5 text-center'>Map</p>
            <img src={PMap} alt="Map" className='w-full h-full'/>
        </div>
    );
}

export default Map;