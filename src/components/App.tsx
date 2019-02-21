/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import TaskBar from './TaskBar';
import reset from '../utils/reset';
import MenuBar from './MenuBar';
import Icon from './Icon';
import Window from './Window';
import Task from './Task';
import data from '../data.json';
import MenuItemBar from './MenuItemBar';

type Task = {
  id: number;
  name: string;
  icon: string;
  type: string;
  status: {
    open: boolean;
    maximize: boolean;
    featuring: boolean;
  };
  childrenTasks: Array<number>;
};

type Status = {
  open: boolean;
  maximize: boolean;
  featuring: boolean;
};

type Tasks = [
  {
    id: number;
    name: string;
    icon: string;
    type: string;
    status: {
      open: boolean;
      maximize: boolean;
      featuring: boolean;
    };
    childrenTasks: Array<number>;
  }
];

function App() {
  const tasks = data.tasks.filter(t => t.status.open);
  return (
    <div
      className="App"
      css={css`
        min-height: 100%;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
        background: #008082;
      `}
    >
      <Global
        styles={css`
          ${reset}
          html {
            box-sizing: border-box;
            font-size: 10px;
          }
          @font-face {
            font-family: 'MS Sans serif';
            src: url(${require('../assets/MSS8pt.ttf')}) format('truetype');
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            -webkit-text-size-adjust: 100%;
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
            line-height: 2;
            font-family: 'MS Sans serif, sans-serif, monospace';
          }
          html,
          body,
          #root {
            height: 100%;
            width: 100%;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <main
        css={css`
          display: grid;
          color: #fff;
          grid-template-columns: repeat(auto-fill, 9.6rem);
          grid-template-rows: repeat(auto-fill, 9.6rem);
          grid-auto-flow: column;
          align-content: center;
          text-align: center;
        `}
      >
        {data.tasks.map(programs => (
          <Icon key={programs.id} name={programs.name} icon={programs.icon} />
        ))}
      </main>
      <MenuBar>
        {data.tasks.map(programs => (
          <MenuItemBar
            key={programs.id}
            name={programs.name}
            icon={programs.icon}
          />
        ))}
      </MenuBar>
      {tasks.map(x => (
        <Window key={x.id} name={x.name} icon={x.icon} tasks={x.childrenTasks}>
          <p>Icon</p>
          <p>O</p>
        </Window>
      ))}
      <TaskBar>
        {tasks.map(x => (
          <Task key={x.id} name={x.name} icon={x.icon} />
        ))}
      </TaskBar>
    </div>
  );
}

export default App;
