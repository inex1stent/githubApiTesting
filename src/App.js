import { useEffect, useState } from 'react';

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
              <h2>{ repository.name} </h2>
              <h3>{ repository.description }</h3>
              </li>
          )
        }) }
      </ul>
    </div>
  );
}
