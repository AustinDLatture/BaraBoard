import React, { Component } from 'react';
import '../../src/App.css';
import { 
    FABButton,
    Icon,
    Textfield    
    } from 'react-mdl';
import CardRow from './cardRow';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardList: this.rebuildCardsFromLastSession() || [],
            title: localStorage.getItem('title') || 'Enter Project Title'
        };
        this.addCard = this.addCard.bind(this);
        this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
        this.createCardMap = this.createCardMap.bind(this);
    }

    addCard() {
        const { cardList } = this.state;
        const numCards = parseInt(localStorage.getItem('numCards') || '0') + 1;
        localStorage.setItem('numCards', numCards);
        this.createCardMap(numCards - 1);
        this.setState({
            cardList: cardList.push(<CardRow cardID={numCards - 1}/>),
        });
    }

    handleUpdateTitle(event) {
        const input = event.target.value;
        localStorage.setItem('title', input)
        this.setState({title: input});
    }

    createCardMap(cardIndex) {
        const cardJSONs = JSON.parse(localStorage.getItem('cardJSONs')) || [];
        const newCard = {
            cardID: cardIndex,
            cardTitle: '',
            cardText: '',
            cardStatus: ''
        }
        cardJSONs.push(newCard);
        localStorage.setItem('cardJSONs', JSON.stringify(cardJSONs));
    }

    rebuildCardsFromLastSession() {
        const cardJSONs = JSON.parse(localStorage.cardJSONs);
        const cardList = [];
        //need to build list of CardRows from cardJSONs
        cardJSONs.forEach(cardJSON => cardList.push(
            <CardRow
                cardID={cardJSON.cardID}
                cardTitle={cardJSON.cardTitle}
                cardText={cardJSON.cardText}
                cardStatus={cardJSON.cardStatus}
            />
        ));

        return cardList;
    }

    render() {
        return (
            <div>       
                <div className='project-title'>
                    <div>
                        <Textfield
                            style={{width: '94%', marginLeft: '3%'}}
                            label={''}
                            value={this.state.title}
                            onChange={this.handleUpdateTitle}
                        />
                    </div>
                </div>
                    <div className='add-task-fab'>
                        <FABButton mini onClick={this.addCard} ripple>
                        <Icon name='+'/>
                        </FABButton>
                    </div>
                {this.state.cardList.map(cardRow => cardRow)}
            </div>        
        );
        }
}
export default Board;