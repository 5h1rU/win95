/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Clock = () => (
  <time
    css={css`
      font-family: 'MS Sans serif';
      font-size: 1.1rem;
    `}
  >
    15:25
  </time>
);

export default Clock;
