import { useState } from "react"; 
import "../styles/Players.css";

function Players({ playerOne, playerTwo }) {
  const [playerOneEditMode, setplayerOneEditMode] = useState(false);
  const [playerTwoEditMode, setplayerTwoEditMode] = useState(false);

  function handlePlayerOneChange(event) {
    const newName = event.target.value;
    playerOne.name = newName;
    newName.length > 0 ? setplayerOneEditMode(false) : setplayerOneEditMode(true);
  }

  function handlePlayerTwoChange(event) {
    const newName = event.target.value;
    playerTwo.name = newName;
    newName.length > 0 ? setplayerTwoEditMode(false) : setplayerTwoEditMode(true);
  }

  return (
    <>
      <div className="players">
        { playerOneEditMode ? <input type="text" onKeyDown={(event) => event.key === "Enter" ? handlePlayerOneChange(event) : undefined } placeholder = {playerOne.name} /> :
        <span className={playerOne.active ? "playerOne-active" : "player"} onClick={() => setplayerOneEditMode(!playerOneEditMode)}>
          {`${playerOne.name}`}: X
        </span>
        }
        
        { playerTwoEditMode ? <input type="text" onKeyDown={(event) => event.key === "Enter" ? handlePlayerTwoChange(event) : undefined } placeholder = {playerTwo.name}/> :
        <span className={playerTwo.active ? "playerTwo-active" : "player"} onClick={() => setplayerTwoEditMode(!playerTwoEditMode)}>
          {`${playerTwo.name}`}: O
        </span>
        }
      </div>
    </>
  );
}

export default Players;
