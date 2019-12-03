import React, { Component } from 'react';
import '../../src/App.css';
import { 
        Card, 
        CardActions,
        CardTitle, 
        CardText, 
        IconButton,
        Textfield
        } from 'react-mdl';

        
class SmallCard extends Component {
    constructor(props) {
        super(props);
        const cardJSONs = JSON.parse(localStorage.getItem('cardJSONs'));
        let status = 'Unstarted'
        cardJSONs.forEach(cardJSON => {
            if (cardJSON.cardID === this.props.cardID) {  
                status = cardJSON.cardStatus;
            }
        });  
        this.state = {
            cardID: this.props.cardID,
            cardTitle: this.props.cardTitle,
            cardText: this.props.cardText,
            status: status,
            className: status === '' ? 'card-unstarted' : status === 'In progress' ? 'card-started' : status === 'Under review' ? 'card-review' : status === 'Complete!' ? 'card-finished' : 'card-unstarted' //just fix which classname gets applied and we're done!!!
        };

        this.advance = this.advance.bind(this);
        this.retreat = this.retreat.bind(this);
      }

      advance(cardID) {
        const cardJSONs = JSON.parse(localStorage.getItem('cardJSONs'));
        let status = '';
        cardJSONs.forEach(cardJSON => {
            if (cardJSON.cardID === cardID) {
                status = cardJSON.cardStatus;
            }
        });
        switch(status) {
            case (''):
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'In progress';
                    }
                });
                this.setState({className: 'card-started', status: 'In progress'});
                break;

            case ('In progress'):
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'Under review';
                    }
                });
                this.setState({className: 'card-review', status: 'Under review'});
                break;

            case ('Under review'):
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'Complete!';
                    }
                });
                this.setState({className: 'card-finished', status: 'Complete!'});
                break;
            
            case ('Complete!'):
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'Complete!';
                    }
                });
                this.setState({className: 'card-finished', status: 'Complete!'});
                break;

            default:
                console.log('trying to advance');
                break;
        }
        localStorage.setItem('cardJSONs', JSON.stringify(cardJSONs));
    }

    retreat(cardID) {
        const cardJSONs = JSON.parse(localStorage.getItem('cardJSONs'));
        let status = '';
        cardJSONs.forEach(cardJSON => {
            if (cardJSON.cardID === cardID) {
                status = cardJSON.cardStatus;
            }
        });

        switch(status) {
            case (''): //if no status, it is unstarted
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'Unstarted';
                    }
                });
                this.setState({className: 'card-unstarted', status: 'Unstarted'});
                break;

            case ('In progress'):
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'Unstarted';
                    }
                });
                this.setState({className: 'card-unstarted', status: 'Unstarted'});
                break;

            case ('Under review'):
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'In progress';
                    }
                });
                this.setState({className: 'card-started', status: 'In progress'});
                break;
            
            case ('Complete!'):
                cardJSONs.forEach(cardJSON => {
                    if (cardJSON.cardID === cardID) {
                        cardJSON.cardStatus = 'Under review';
                    }
                });
                this.setState({className: 'card-review', status: 'Under review'});
                break;

            default:
                console.log('trying to retreat');
                break;
        }
        localStorage.setItem('cardJSONs', JSON.stringify(cardJSONs));
    }

    render() {
        return (
            <div className={this.state.className}>
                <Card shadow={0}>
                    <CardTitle expand style={{color: '#fff', background: '#42b883'}}>
                    <Textfield
                            label={"Enter task name..."}
                            value={this.state.cardTitle || null}
                            style={{width: '300px', color: 'black'}}
                            onChange={this.props.handleTaskTitleChange}
                    />
                    </CardTitle>
                    <CardText>
                        <Textfield
                            label={"Enter details..."}
                            value={this.state.cardText || null}
                            rows={3}
                            style={{width: '300px', color: 'black'}}
                            onChange={this.props.handleTaskDetailsChange}
                        />
                    Status: {this.state.status === '' ? 'Unstarted' : this.state.status}
                    </CardText>
                    
                    <CardActions border>
                        <div style={{textAlign: 'center'}}>
                            <IconButton name="←" onClick={() => this.retreat(this.state.cardID)} ripple/> 
                            <IconButton name="→" onClick={() => this.advance(this.state.cardID)} ripple/>
                        </div>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SmallCard;
