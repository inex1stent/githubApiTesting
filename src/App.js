import { useEffect, useState } from 'react';
import './App.css';

export function App() {
  const [ repositories, setRepositories ] = useState([])


  useEffect(() => {
    fetch('https://api.github.com/users/leoo027/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <div>
      <ul>
        { repositories.map(repository => {
          return (
            <li>
              <h2>Name: { repository.name } </h2>
              <h3>Description: { repository.description }</h3>
              <h4>Lang: { repository.language }</h4>
              </li>
          )
        }) }
      </ul>
    </div>
  );
}
