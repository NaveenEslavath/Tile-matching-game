import React, {useState} from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import GameBoard from './components/GameBoard'
import SuccessScreen from './components/SuccessScreen'
import './App.css'

const App = () => {
  const [playerName, setPlayerName] = useState(
    localStorage.getItem('playerName') || '',
  )
  const [gameOver, setGameOver] = useState(false)
  const [finalScore, setFinalScore] = useState(0)
  const [timeTaken, setTimeTaken] = useState(0)

  const handleNameSubmit = name => {
    setPlayerName(name)
    localStorage.setItem('playerName', name)
  }

  const handleGameEnd = (score, time) => {
    setFinalScore(score)
    setTimeTaken(time)
    setGameOver(true)
  }

  const handleRestart = () => {
    setPlayerName('')
    setGameOver(false)
    setFinalScore(0)
    setTimeTaken(0)
    localStorage.removeItem('playerName')
  }

  return (
    <div className='App'>
      {!playerName && <WelcomeScreen onNameSubmit={handleNameSubmit} />}
      {playerName && !gameOver && <GameBoard onGameEnd={handleGameEnd} />}
      {gameOver && (
        <SuccessScreen
          score={finalScore}
          timeTaken={timeTaken}
          onRestart={handleRestart}
          playerName={playerName}
        />
      )}
    </div>
  )
}

export default App
