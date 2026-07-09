const pageContent = {
    company: 'eiei',
    accent: 'games',
    tagline: 'Europe',
    message: 'Stand by for interesting games...'
};

const HomePage = ({ company, accent, tagline, message }) => {
    return (
        <main className="container">
            <h1 className="logo">
                {company}
                <span className="logo-accent">{accent}</span>
            </h1>
            <p className="tagline">{tagline}</p>
            <div className="divider" aria-hidden="true" />
            <p className="description">{message}</p>
        </main>
    );
};

const App = () => {
    return <HomePage {...pageContent} />;
};

export default App;