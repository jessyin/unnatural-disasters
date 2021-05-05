import CardTemplate from "./CardTemplate";

const GamePieces = () => {
  return (
    <>
      <div className="GamePieces-instructions">
        <h2>Game Pieces: What you'll need to play Un-Natural Disasters</h2>
        <p>
          Play online at:{" "}
          <a href="https://playingcards.io/d72tb7">https://playingcards.io/d72tb7</a>
        </p>
        <p>-or-</p>
        <p>Print out our premade cards, or create your own deck!</p>
      </div>
      <CardTemplate />
    </>
  );
};

export default GamePieces;
