import React from 'react';
import './App.css';

function App() {
  return (
      <div className="app">
        <header className="header">
          <div className="logo">Ciferica</div>
          <nav className="nav">
            <button>Prijzen</button>
            <button>Account aanvragen</button>
            <button>Over</button>
            <button>Bibliotheek</button>
            <button>Contact</button>
            <button>Sign in</button>
            <button className="request-btn">Request</button>
          </nav>
        </header>

        <main className="content">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>

          <div className="filter">
            <button className="active">Meest recent</button>
            <button>Titel</button>
            <button>Auteur</button>
          </div>

          <div className="articles">
            <Article
                title="De gevolgen van change management"
                description="Een structuur die constant veranderdt, werkt dat wel?"
            />
            <Article
                title="Waarom je je gras soms beter niet maait"
                description="Je gras kan soms beter wat langer zijn!"
            />
            <Article
                title="De toekomst van AI"
                description="Energie kosten gaan omhoog!"
            />
          </div>

          <div className="pagination">
            <span className="page-number active">1</span>
            <span className="page-number">2</span>
            <span className="page-number">3</span>
            <span className="ellipsis">...</span>
            <span className="page-number">67</span>
            <span className="page-number">68</span>
          </div>
        </main>
      </div>
  );
}

function Article({ title, description }) {
  return (
      <div className="article">
        <div className="article-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="read-btn">Lees dit artikel</button>
        </div>
        <div className="article-actions">
          <button className="edit-btn">✏️</button>
          <button className="download-btn">⬇️</button>
        </div>
      </div>
  );
}

export default App;
