/** @jsx jsx */
import { Fragment } from 'react';
import { css, jsx } from '@emotion/core';
import Task from './Task';
import Notifications from './Notifications';

type Props = {
  children: Array<JSX.Element>;
};

const TaskBar = (props: Props) => {
  return (
    <div
      css={css`
        background-color: #c0c0c0;
        border-width: 2px;
        border-color: #ffff #ccc #c0c0c0 #fff;
        padding: 2px;
        display: grid;
        grid-column-gap: 0.4rem;
        grid-template-columns: 57px auto 57px;
        box-shadow: inset 0px 1px 0 #fff, 0 1px #fff, 1px 1px #fff;
      `}
    >
      <Fragment>
        <Task name="Start" icon="start.png" />
        <section
          css={css`
            display: grid;
            grid-column-gap: 0.2rem;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          `}
        >
          {props.children}
        </section>
        <Notifications />
      </Fragment>
    </div>
  );
};

export default TaskBar;
