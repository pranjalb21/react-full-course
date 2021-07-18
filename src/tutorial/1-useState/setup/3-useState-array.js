import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <React.Fragment>
      {
        people.map((person) => {
          const{id, name} = person;
          return (
            <div className="item" key={id}>
              <h4>{name}</h4>
              <button className="btn" onClick={() => removeItem(id)}>Remove</button>
            </div>
          );
        })
      }
      <button className="btn" onClick={() => setPeople([])}>Delete all</button>
    </React.Fragment>
  );
};

export default UseStateArray;
