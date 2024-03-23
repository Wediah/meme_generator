import React from 'react'
import memesData from '../memesData'

export default function Meme() {
    function getRandomMeme() {
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomIndex].url
        const randomMeme = memesData[randomIndex]
        console.log(randomMeme)
    }

  return (
    <main>
        <div className='form'>
          <input 
            type='text' 
            placeholder='Top Text' 
            className='form--input'
          />
          <input 
            type='text' 
            placeholder='Bottom Text' 
            className='form--input'
          />
        
        <button 
            className="form--button"
            onClick={getRandomMeme}
        >
            Get a new meme image 🖼️
        </button>
      </div>
    </main>
  )
}
