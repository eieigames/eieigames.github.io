import TextAdv from "./components/TextAdv";

const pageContent = {
  company: "eiei",
  accent: "games",
  tagline: "Europe",
};

const PlaceholderGame = () => {
  return (
    <article className="game-card game-card-placeholder">
      <div className="game-card-badge">Coming Soon</div>
      <h2 className="game-card-title">Sepsis 2.0</h2>
      <p className="game-card-text">
        WIP. React native mobile. Be a microbe and kill.
      </p>
      <span className="game-card-cta">Placeholder activated</span>
    </article>
  );
};

const HomePage = ({ company, accent, tagline }) => {
  return (
    <main className="container">
      <h1 className="logo">
        {company}
        <span className="logo-accent">{accent}</span>
      </h1>
      <p className="tagline">{tagline}</p>
      <div className="divider" aria-hidden="true" />
      <section className="games-grid" aria-label="Games">
        <TextAdv />
        <PlaceholderGame />
      </section>
    </main>
  );
};

const App = () => {
  return <HomePage {...pageContent} />;
};

export default App;
