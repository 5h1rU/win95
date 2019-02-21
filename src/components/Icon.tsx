/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Icon = ({ name, icon }: { name: string; icon: string }) => (
  <div
    css={css`
      color: inherit;
      font-family: 'MS Sans serif';
      font-size: 1.1rem;
      line-height: 1;
    `}
  >
    <img width="48px" src={require(`../assets/${icon}`)} />
    <p>{name}</p>
  </div>
);

export default Icon;
