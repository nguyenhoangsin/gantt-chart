import React, { Component } from 'react';
import 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

class Gantt extends Component {
  componentDidMount() {
    window.gantt.config.scale_unit = "month";
    window.gantt.config.date_scale = "%F, %Y";
    window.gantt.config.scale_height = 50;
    window.gantt.config.subscales = [
      {unit: "day", step: 1, date: "%j, %D"}
    ];

    window.gantt.config.readonly = true;

    window.gantt.config.columns = [
      { name: 'wbs', label: '#', width: 40, min_width: 40, align: 'center', template: window.gantt.getWBSCode },
      { name: 'id', label: 'Id', width: 40, min_width: 40, align: 'center' },
      { name: 'text', label: 'Task', width: 250, min_width: 250 },
      { name: 'start_date', label:'Start', width: 100, min_width: 100, align: 'center' },
      { name: 'end_date', label:'End', width: 100, min_width: 100, align: 'center' },
      { name: 'estimate', label:'Est', width: 40, min_width: 40, align: 'center' },
      { name: 'user', label:'Owner', width: 100, min_width: 100, align: 'center' },
      { name: 'sprint', label:'Sprint', width: 100, min_width: 100, align: 'center' },
      { name: 'tag', label:'Tag', width: 40, min_width: 40, align: 'center' },
      { name: 'status', label:'Status', width: 80, min_width: 80, align: 'center' },
      { name: 'priority', label:'Priority', width: 80, min_width: 80, align: 'center' },
      // { name: 'add', width: 40, min_width: 40 },
    ];

    window.gantt.config.layout = {
      css: 'gantt_container',
      cols: [
        {
          width: 430,
          rows: [
            {
              view: 'grid',
              scrollX: 'scrollHorGrid',
              scrollable: true,
              scrollY: 'scrollVer',
            },
            {
              view: 'scrollbar',
              id: 'scrollHorGrid',
              // group:'horizontal',
            },
          ],
        },
        // {resizer: true, width: 1},
        {
          rows: [
            {
              view: 'timeline',
              scrollX: 'scrollHorTimeline',
              scrollY: 'scrollVer'
            },
            {
              view: 'scrollbar',
              id: 'scrollHorTimeline',
              // group:'horizontal',
            }
          ],
        },
        {
          view: 'scrollbar',
          id: 'scrollVer',
        },
      ],
    };
    window.gantt.init(this.ganttContainer);
    window.gantt.parse(this.props.tasks);

  }

  render() {
    return (
        <div
            ref={(input) => { this.ganttContainer = input }}
            style={{width: '100%', height: '300px'}}
        ></div>
    );
  }
}

export default Gantt;
