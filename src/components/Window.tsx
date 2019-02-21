/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Icon from './Icon';
import bg from '../assets/track.png';

type Props = {
  name: string;
  icon: string;
  tasks: Array<number>;
  children: Array<JSX.Element>;
};

const Process = (props: Props) => (
  <section
    css={css`
      background: #c0c0c0;
      border: 2px solid;
      border-color: #fff #000000 #000000 #fff;
      padding: 2px 0;
      width: 800px;
      position: absolute;
      max-width: 100%;
      font-family: 'MS Sans serif';
      font-size: 1.1rem;
      .title {
        display: grid;
        grid-template-columns: 1.6rem auto;
        column-gap: 1rem;
        align-items: center;
        text-align: left;
        background: #00007f;
        color: #fff;
        line-height: 1.85;
      }
      nav {
        display: grid;
        column-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
        line-height: 2;
        padding-left: 1rem;
      }
      main {
        background: #fff8ff;
        border-width: 2px;
        border-style: ridge groove groove ridge;
        border-color: #7f787f #fff8ff #fff8ff #7f787f;
        display: grid;
        grid-template-columns: repeat(auto-fill, 8rem);
        grid-template-rows: repeat(auto-fill, 8rem);
        column-gap: 1rem;
        row-gap: 1rem;
        align-content: center;
        text-align: center;
        padding: 1rem;
        overflow-y: scroll;
        &::-webkit-scrollbar-track {
          background-image: url(${bg});
        }
        &::-webkit-scrollbar {
          width: 1.6rem;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #c0c0c0;
          border-width: 2px;
          border-style: groove ridge ridge groove;
          border-color: #fff8ff #000000 #000000 #fff8ff;
        }
        &::-webkit-scrollbar-corner {
          background-color: #cacaca;
        }
      }
      footer {
        display: grid;
        grid-template-columns: 25rem auto;
        column-gap: 0.2rem;
        text-align: left;
        padding: 0.2rem;
      }
      .action-details {
        border: 1px solid;
        border-color: #888888 #dadada #dadada #888888;
        padding: 0.2rem 0.3rem;
        line-height: 1;
      }
      .action-size {
        border: 1px solid;
        border-color: #888888 #dadada #dadada #888888;
        padding: 0.2rem 0.3rem;
        line-height: 1;
      }
    `}
  >
    <header>
      <section className="title">
        <img width="16px" src={require(`../assets/${props.icon}`)} />
        <h1>{props.name}</h1>
      </section>
      <nav>
        <a>About</a>
        <a>Twitter</a>
        <a>About</a>
        <a>Twitter</a>
      </nav>
    </header>
    <main>{props.children}</main>
    <footer>
      <div className="action-details">{`${props.tasks.length} object(s)`}</div>
      <div className="action-size">empty</div>
    </footer>
  </section>
);

export default Process;
