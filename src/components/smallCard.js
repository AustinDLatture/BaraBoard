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
        this.state = {className: 'card-unstarted', status: 'Unstarted'};
        this.advance = this.advance.bind(this);
        this.retreat = this.retreat.bind(this);
      }

      advance() {
        switch(this.state.className) {
        case ('card-unstarted'):
            this.setState({className: 'card-started', status: 'In progress'});
            break;

        case ('card-started'):
            this.setState({className: 'card-review', status: 'Under review'});
            break;

        case ('card-review'):
            this.setState({className: 'card-finished', status: 'Complete!'});
            break;
        
        case ('card-finished'):
            this.setState({className: 'card-finished', status: 'Complete!'});
            break;

        default:
            break;
      }
    }

    retreat() {
    switch(this.state.className) {
        case ('card-unstarted'):
            this.setState({className: 'card-unstarted', status: 'Unstarted'});
            break;

        case ('card-started'):
            this.setState({className: 'card-unstarted', status: 'Unstarted'});
            break;

        case ('card-review'):
            this.setState({className: 'card-started', status: 'In progress'});
            break;
        
        case ('card-finished'):
            this.setState({className: 'card-review', status: 'Under review'});
            break;

        default:
            break;
        }
    }

    render() {
        return (
            <div className={this.state.className}>
                <Card shadow={0}>
                    <CardTitle expand style={{color: '#fff', background: '#42b883'}}>
                    <Textfield
                            label="Enter task name..."
                            style={{width: '300px', color: 'black'}}
                    />
                    </CardTitle>
                    <CardText>
                        <Textfield
                            label="Enter details..."
                            rows={3}
                            style={{width: '300px', color: 'black'}}
                        />
                    Status: {this.state.status}
                    </CardText>
                    
                    <CardActions border>
                        <div style={{textAlign: 'center'}}>
                            <IconButton name="←" onClick={this.retreat} ripple/> 
                            <IconButton name="→" onClick={this.advance} ripple/>
                        </div>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default SmallCard;
