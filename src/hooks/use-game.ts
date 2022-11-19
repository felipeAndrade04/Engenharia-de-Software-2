import { useState } from "react"

type Player = 'Player1' | 'Player2'

interface Pontuation  {
  player: Player
  pontuation: number
}

interface Game {
  player1: Pontuation
  player2: Pontuation
}

interface Card {
  code: number
  position: number
}

export const useGame = () => {
  const [currentPlayer, setCurrentPlayer] = useState<Player>('Player1')
  const [totalCards, setTotalCards] = useState(8)
  const [cards, setCards] = useState<Card[]>()
  const [game, setGame] = useState<Game>({
    player1: {
      player: 'Player1',
      pontuation: 0
    },
    player2: {
      player: 'Player2', 
      pontuation: 0
    }
  })

  const changeCurrentPlayer = (player: Player) => {
    setCurrentPlayer(player)
  }

  const currentPlay = (card1: number, card2: number) => {

  }

  return {
    currentPlayer,
    game,
    changeCurrentPlayer
  }
}