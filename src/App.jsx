// We import useContext to have access to the context.
import { useState, useEffect, useContext } from 'react';
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';
// TODO: Import the ThemeContext so we can use the theme and toggleTheme functions.

function App() {
  const [issues, setIssues] = useState([]);
  // TODO: Use theme and toggleTheme from the ThemeContext.

  useEffect(() => {
    document.title = 'GitHub issues';
  }, []);

  const getRepoIssues = async (repo) => {
    const issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    console.log('issuesURL', issuesURL);

    const res = await fetch(issuesURL);
    const response = await res.json();
    setIssues(response);
  };

  return (
    // TODO: Apply the current theme to the main div for the application.
    <div className="app">
      {/* TODO: Use toggleTheme to handle the button click. */}
      <button>Toggle Theme</button>
      <SearchBar onFormSubmit={getRepoIssues} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
