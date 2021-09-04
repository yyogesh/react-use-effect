import React from 'react';
import './App.css';
import BitCoin from './components/BitCoin';
import Form from './components/Form';
import NewestPerson from './components/NewestPerson';
import People from './components/People';

function App() {
  const [people, setPeople] = React.useState([
    {
      firstName: 'John',
      lastName: 'Doe'
    },
    {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  ]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  console.log('people', people);

  return (
    <div className="container">
      <Form addPerson={addPerson} />
      <People people={people} />
      <NewestPerson newestPerson={people[people.length - 1]} />
      <BitCoin />
    </div>
  );
}

export default App;
