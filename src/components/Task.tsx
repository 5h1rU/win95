/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import bg from '../assets/track.png';

const active = css`
  border-style: ridge solid solid ridge;
  border-color: #000000 #fff8ff #fff8ff #000000;
  box-shadow: inset 0.1rem 0.1rem 0 0 #7d7d7d;
  background: url(${bg}) #fff;
`;

const Task = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <a
      css={css`
        display: grid;
        align-items: center;
        column-gap: 0.2rem;
        text-align: left;
        font-size: 1.1rem;
        font-family: 'MS Sans serif';
        border-style: solid ridge ridge solid;
        border-color: #fff8ff #000000 #000000 #fff8ff;
        border-width: 0.1rem;
        box-shadow: inset -1px -1px 0 0 #7d7d7d;
        background: #c0c0c0;
        display: grid;
        grid-template-columns: 10% 90%;
        grid-template-columns: minmax(1.6rem, 10%) 90%;
        padding: 0 0.2rem;
        overflow: ellipsis;
        white-space: nowrap;
        &:active {
          // outline-color: #000;
          // outline-style: dotted;
          // outline-width: .1rem;
          // outline-offset: -4px;
          ${active}
        }
      `}
    >
      <img
        css={css`
          width: 1.6rem;
        `}
        src={require(`../assets/${icon}`)}
      />
      <small>{name}</small>
    </a>
  );
};

export default Task;
