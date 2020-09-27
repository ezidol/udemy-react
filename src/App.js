import React, { Component } from 'react';
import Person from './Person/Person';
import styled from 'styled-components';
import './App.css';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: #eee;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
  `


class App extends Component {
  state = {
    persons: [
        { id: 'fgdg', name: '루피', age: 31 },
        { id: 'vcbfdg', name: '조로', age: 30 },
        { id: 'cxvdf', name: '상디', age: 37 },
        { id: 'qwe', name: '우솝', age: 35 },
    ],
    otherState: 'this is ohter state',
    showPersons: false
  }
  togglePersonHandeler = () => {    
    this.setState({
      showPersons: !this.state.showPersons
    })
  }
  deletePersonHandeler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons:persons
    });
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons:persons
    });
  }
  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
          return <Person
           click={() => this.deletePersonHandeler(index)}
           name={person.name}
           age={person.age}
           key={person.id}
           changed={(e) => this.nameChangeHandler(e, person.id)} />
        }
      )}
        </div>
        );

    
    }
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <h1>Hello, World!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <p>{this.state.otherState}</p>
          <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandeler}>
            Show Person
          </StyledButton>
          {persons}
          

        </div>
      
    );
    
  }
}

export default App;
