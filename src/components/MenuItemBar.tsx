/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const MenuItemBar = ({ name, icon }: { name: string; icon: string }) => (
  <li
    css={css`
      align-items: center;
      display: grid;
      grid-template-columns: 3.2rem 45% 10%;
      column-gap: 1rem;
      font-size: 1.1rem;
      padding: 0.5rem 0 0.5rem 1rem;
      &:hover {
        background: #00007f;
        color: #fff;
      }
      span {
        font-size: 0.8rem;
      }
      span:hover {
        color: inherit;
      }
    `}
  >
    <img src={require(`../assets/${icon}`)} />
    {name}
    <span>⮀</span>
  </li>
);

export default MenuItemBar;
