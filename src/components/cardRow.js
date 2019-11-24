import React, { Component } from 'react';
import '../../src/App.css';
import SmallCard from './smallCard';
import { FABButton,
         Icon 
        } from 'react-mdl';

class CardRow extends Component {
    constructor(props) {
        super(props);
        this.state = { showComponent: true };
        this.deleteCard = this.deleteCard.bind(this);
    }

    deleteCard() {
        this.setState({ showComponent: false })
    }


    render() {
        return (this.state.showComponent &&
            <>
                <div className='delete-task-fab' >
                        <FABButton onClick={this.deleteCard} ripple>
                            <Icon name='-'/>
                        </FABButton>
                </div>
                <div className='card-row'>
                    <SmallCard/>
                </div>
            </>
        );
    }
}

export default CardRow;