import React, { Component } from 'react';
import './App.css';
import { 
        FABButton,
        Icon,
        Textfield    
        } from 'react-mdl';
import CardRow from './components/cardRow';

class Bara extends Component {
  constructor(props) {
    super(props);
    this.state = {cardList: []};
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  addCard() {
    const cardList = this.state.cardList;
    this.setState({
      cardList: cardList.concat(<CardRow/>)
    });
  }

  deleteCard() {
    const cardList = this.state.cardList;

  }
  
  render() {
    return (
      <div className='general-gradient'>
        <div style={{border: 'grey', height: '130px', width: '100%'}}>
          <h1 className='header'>BaraBoard</h1>
        </div>
        <div>
        <Textfield
            label="Enter project name..."
            style={{width: '200px', color: 'white', marginLeft: '20px'}}
        />
        </div>
        <div className='add-task-fab' >
          <FABButton onClick={this.addCard} ripple>
            <Icon name='+'/>
          </FABButton>
        </div>
        {this.state.cardList.map(function(cardRow) {
          return cardRow;
        })}
      </div>
    );
  }
}

export default Bara;
