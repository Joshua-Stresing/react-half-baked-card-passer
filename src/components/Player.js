import React from 'react';
import { useGameContext } from '../Context/GameContext';
import CardList from './CardList';

export default function Player({
  player,
  hand
}) {

  const { to, setTo, setFrom, selectedCard, setSelectedCard } = useGameContext();

  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
