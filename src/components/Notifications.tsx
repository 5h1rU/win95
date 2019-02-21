/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Clock from './Clock';
import Process from './Process';
import network from '../assets/network.png';

const Notifications = () => (
  <div
    css={css`
      align-items: center;
      border-top: 1px solid gray;
      border-left: 1px solid gray;
      box-shadow: 1px 0 #fff, 0 1px #fff, 1px 1px #fff;
      display: grid;
      grid-template-columns: 50% auto;
      padding: 0 2px;
      min-width: 58px;
    `}
  >
    <Process image={network} />
    <Clock />
  </div>
);

export default Notifications;
