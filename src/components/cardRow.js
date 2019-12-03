import React, { Component } from 'react';
import '../../src/App.css';
import SmallCard from './smallCard';
import { FABButton,
         Icon 
        } from 'react-mdl';
        
class CardRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showComponent: true,
            cardID: this.props.cardID
        };
        this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard() {
        const cardJSONs = JSON.parse(localStorage.getItem('cardJSONs'));
        const cardID = this.state.cardID;
        cardJSONs.forEach(cardJSON => {
            if (cardJSON.cardID === cardID) {
                cardJSONs.splice(cardID, 1);
            }
        });
        const numCards = parseInt(localStorage.getItem('numCards')) - 1;
        localStorage.setItem('numCards', numCards);
        localStorage.setItem('cardJSONs', JSON.stringify(cardJSONs));
        this.setState({ 
            showComponent: false,
        })
    }

    handleTaskTitleChange(event, cardID) {
        const cardJSONs = JSON.parse(localStorage.getItem('cardJSONs'));
        cardJSONs.forEach(cardJSON => {
            if (cardJSON.cardID === cardID) {
                cardJSON.cardTitle = event.target.value;
            }
        });
        localStorage.setItem('cardJSONs', JSON.stringify(cardJSONs));          
    }

    handleTaskDetailsChange(event, cardID) {
        const cardJSONs = JSON.parse(localStorage.getItem('cardJSONs'));
        cardJSONs.forEach(cardJSON => {
            if (cardJSON.cardID === cardID) {
                cardJSON.cardText = event.target.value;
            }
        });
        localStorage.setItem('cardJSONs', JSON.stringify(cardJSONs));      
    }


    render() {
        return (this.state.showComponent &&
            <>
                <div className='delete-task-fab'>
                    <FABButton mini onClick={this.deleteCard} ripple>
                        <Icon name='-'/>
                    </FABButton>
                </div>
                <div className='card-row'>
                    <SmallCard
                        cardID={this.props.cardID}
                        cardTitle={this.props.cardTitle}
                        cardText={this.props.cardText}
                        cardStatus={this.props.cardStatus}
                        handleTaskTitleChange={(event) => this.handleTaskTitleChange(event, this.props.cardID)}
                        handleTaskDetailsChange={(event) => this.handleTaskDetailsChange(event, this.props.cardID)}
                    />
                </div>
            </>
        );
    }
}

export default CardRow;