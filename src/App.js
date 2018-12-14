import React, { Component } from 'react';
import Gantt from './Gantt';
import './App.css';

var data = {
  data: [
    { id: 1, text: 'Task #1', start_date: '15-04-2017', end_date: '17-04-2017', estimate: 3, progress: 0.6,
      user: 'binhdk', sprint: 'sprint1', tag: 'task', status: 'untouched', priority: 'low' },
    { id: 2, text: 'Task #1', start_date: '15-05-2017', end_date: '17-05-2017', estimate: 3, progress: 0.6,
      user: 'binhdk', sprint: 'sprint1', tag: 'task', status: 'untouched', priority: 'low' },
    { id: 3, text: 'Task #1', start_date: '15-06-2017', end_date: '17-06-2017', estimate: 3, progress: 0.6,
      user: 'binhdk', sprint: 'sprint1', tag: 'task', status: 'untouched', priority: 'low' },
    // {id: 2, text: 'Task #2', start_date: '17-04-2017', day: 2, progress: 0.4, estimate: 3},
    // {id: 3, text: 'Task #3', start_date: '18-04-2017', day: 5, progress: 1, estimate: 3},
    // {id: 4, text: 'Task #4', start_date: '15-05-2017', day: 1, progress: 0.6, estimate: 3},
    // {id: 5, text: 'Task #5', start_date: '17-05-2017', day: 2, progress: 0.4, estimate: 3},
    // {id: 6, text: 'Task #6', start_date: '18-05-2017', day: 5, progress: 1, estimate: 3},
    // {id: 7, text: 'Task #7', start_date: '15-06-2017', day: 1, progress: 0.6, estimate: 3},
    // {id: 8, text: 'Task #8', start_date: '17-06-2017', day: 2, progress: 0.4, estimate: 3},
    // {id: 9, text: 'Task #9', start_date: '18-06-2017', day: 5, progress: 1, estimate: 3},
  ],
  links: [
    {id: 1, source: 1, target: 3, type: '0'}
  ]
};

class App extends Component {
  render() {
    return (
      <Gantt tasks={data}/>
    );
  }
}
export default App;
