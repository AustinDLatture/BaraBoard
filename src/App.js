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

  changeBoards() {
    const { activeTab } = this.state;
    if (activeTab === 0) {
      return (
        <div className='about'>
            <h2>Welcome to BaraBoard</h2>
            <p style={{color: 'white', fontFamily: 'Verdana', marginLeft: '10%', marginRight: '10%'}}> 
            <br/>
            BaraBoard is a manager of tasks. This site can be used by students or freelance creatives to manage the tasks that they have yet to complete for a given project.
            <br/>
            <br/>
            BaraBoard serves as a lightweight alternative to more robust task management web applications and is most effective when used by individuals or small teams.
            <br/>
            </p>
            <h3>Important information: </h3>
            <p style={{color: 'white', fontFamily: 'Verdana', marginLeft: '10%', marginRight: '10%'}}> 
            Because there is no login service, BaraBoard data is stored locally. Therefore, you will not have access to the same boards on multiple machines. This will be changing in a future update when a login service is implemented.
            Additionally, new boards are always appended to the end of the list of boards. Boards that are deleted will always be the last board listed amongst the tabs.
            It is recommended to prioritize the longest term project as the first board you create.
            <br/>
            <br/>
            Click the + icon above to get started.
            </p>
        </div>
      );
    } else {
      return (
        this.state.boardList.map((board, index) => index + 1 === activeTab && board)
      );
    }
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
