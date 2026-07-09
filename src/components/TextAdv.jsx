import textGameImage from "../../assets/text-game.png";

const TextAdv = () => {
  return (
    <a
      className="game-card game-card-link"
      href="https://old-time-text-adventure.fly.dev"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="game-card-image"
        src={textGameImage}
        alt="Old Time Text Adventure preview"
      />
      <div className="game-card-badge">Live Now</div>
      <h2 className="game-card-title">Old Time Text Adventure</h2>
      <p className="game-card-text">
        LLM driven old time text adventure at fly.io
      </p>
      <span className="game-card-cta">
        Play at old-time-text-adventure.fly.dev
      </span>
    </a>
  );
};

export default TextAdv;
