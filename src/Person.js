import React from 'react'; 
import data from './data';

const Person = () => {
    const [people, setPeople] = React.useState(data); 
  return (
      <div className="container">
          <h3>{people.length} birthday's today</h3>
         {
             people.map(person => (
                 <div className="person" key={person.id}>
                     <img src={person.image } alt={person.name} />
                     <div>
                     <h4>{person.name}</h4>
                     <p>{person.age} years</p>
                     </div>
                 </div>
             ))
         }
         <button onClick={() => setPeople([])}>Clear All</button>
      </div>
  )
}

export default Person; 