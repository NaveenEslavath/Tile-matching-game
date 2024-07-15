import React, {useState} from 'react'

const WelcomeScreen = ({onNameSubmit}) => {
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (name.trim()) {
      onNameSubmit(name)
    }
  }

  return (
    <div className='welcome-screen'>
      <h1>Welcome to the Tile Matching Game!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <button type='submit'>Start Game</button>
      </form>
    </div>
  )
}

export default WelcomeScreen
