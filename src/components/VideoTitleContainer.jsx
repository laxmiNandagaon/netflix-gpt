import React from 'react'

const VideoTitleContainer = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-52 px-12 absolute text-white bg-gradient-to-r from-black'>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <p className='text-xl w-1/3'>{overview}</p>
      <div>
        <button className='bg-white hover:bg-gray-500 text-black text-xl  py-4 px-16 bg-opacity-70 rounded-lg '>play</button>
        <button className='bg-white hover:bg-gray-500 text-black text-xl  py-4 px-16 bg-opacity-70 rounded-lg mx-2 mt-2'>more</button>
      </div>
    </div>
  )
}

export default VideoTitleContainer;
