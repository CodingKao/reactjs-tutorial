import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker') {
        throw new Error('Not ahero!')
    }

  return (
    <div>
        {heroName}
    </div>
  )
}

export default Hero