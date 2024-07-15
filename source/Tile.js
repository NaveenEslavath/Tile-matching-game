import React from 'react'

const Tile = ({tile, onClick}) => {
  return (
    <div className='tile' onClick={() => onClick(tile)}>
      {tile.isFlipped || tile.isMatched ? (
        <img src={tile.image} alt='tile' />
      ) : (
        '?'
      )}
    </div>
  )
}

export default Tile
