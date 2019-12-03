import React, { Component } from 'react';
import './App.css';
import Board from './components/board';
import {
  Tab 
  } from 'react-mdl';

class Bara extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardList:[<Board/>]
    };
    this.addBoard = this.addBoard.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
  }

  addBoard() {
    const { boardList, tabList } = this.state;
    this.setState({
      tabList: tabList.concat(<Tab> Board {tabList.indexOf(tabList[tabList.length-1]) + 1} </Tab>),
      boardList: boardList.concat(<Board/>)
    });
  }

  deleteBoard() {
    const { boardList, tabList } = this.state;
    tabList.pop();
    boardList.pop();
    this.setState({
      activeTab: 0
    });
  }

  render() {
    return (
      <>
      <div className='general-gradient'>
        <div style={{height: '130px', width: '100%'}}>
            <h1 className='header'>BaraBoard</h1>
        </div>
        <div>
          <Board/>
        </div>
      </div>
      </>
    );
  }
}

export default Bara;
