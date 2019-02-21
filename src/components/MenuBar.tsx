/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import MenuItemBar from './MenuItemBar';

type Props = {
  children: Array<JSX.Element>;
};

const MenuBar = (props: Props) => (
  <div
    css={css`
      border-style: solid ridge ridge solid;
      border-color: #fff8ff #000000 #000000 #fff8ff;
      border-width: 0.1rem;
      box-shadow: inset -1px -1px 0 0 #7d7d7d;
      background: #c0c0c0;
      display: grid;
      line-height: 3rem;
      font-family: 'MS Sans serif';
      grid-template-columns: 15% 85%;
      width: 16.25rem;
      position: relative;
      top: 0.2rem;
      left: 0.2rem;
    `}
  >
    <h1
      css={css`
        grid-row: 1 / span 5;
        transform: rotate(180deg);
        writing-mode: vertical-rl;
        background: #888;
        color: #c0c0c0;
        font-size: 2rem;
        font-weight: bold;
        padding-top: 1rem;
    }
      `}
    >
      Windows 95
    </h1>
    <ul>{props.children}</ul>
  </div>
);

export default MenuBar;
