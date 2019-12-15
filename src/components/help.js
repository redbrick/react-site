import React, { useState } from 'react';
import '../core.css';

import Page from './page';
import Exams from './exams';
import Joining from './joining';

import helpdeskTab from '../content/helpdesk';
import servicesTab from '../content/services';

const active = (tab, id) => (tab === id ? 'Tab Tab-Active' : 'Tab');

function displayTab(tab) {
  switch (tab) {
    case 0:
      return <Page page={servicesTab} />;
    case 1:
      return <Page page={helpdeskTab} />;
    case 2:
      return <Joining />;
    case 3:
      return <Exams />;
    default:
      return <></>;
  }
}

export default function Help() {
  const [tab, setTab] = useState(0);

  const tabHandler = e => {
    e.preventDefault();
    setTab(parseInt(e.target.getAttribute('tab'), 10));
  };

  return (
    <div className="Main">
      <h1>So you need help..?</h1>
      <h2>Select a tab below for assistance!</h2>
      <ul className="Tabs">
        <li tab={0} className={active(tab, 0)} onClick={tabHandler}>
          Services
        </li>
        <li tab={1} className={active(tab, 1)} onClick={tabHandler}>
          Helpdesk
        </li>
        <li tab={2} className={active(tab, 2)} onClick={tabHandler}>
          Joining Redbrick
        </li>
        <li tab={3} className={active(tab, 3)} onClick={tabHandler}>
          Past Exams
        </li>
      </ul>
      {displayTab(tab)}
    </div>
  );
}
