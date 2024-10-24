import {useState} from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleClickEdit() {
    setIsEditing(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing){
    playerName = <input type="text" required />
  }


  return (
    <li>
      <span>
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClickEdit}>Edit</button>
    </li>
  );
}