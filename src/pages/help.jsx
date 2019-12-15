import React, { useState } from 'react';

import Layout from '../components/layout.jsx';
import SEO from '../components/seo.jsx';
import Page from '../components/page.jsx';
import Exams from '../components/exams.jsx';
import Joining from '../components/joining.jsx';

import helpdeskTab from '../content/helpdesk.js';
import servicesTab from '../content/services.js';

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

  const handleKeyPress = () => {};

  return (
    <Layout>
      <SEO title="Help" />
      <div className="Main">
        <h1>So you need help..?</h1>
        <h2>Select a tab below for assistance!</h2>
        <ul className="Tabs">
          <li className={active(tab, 0)}>
            <div
              tab={0}
              tabIndex={0}
              role="button"
              onClick={tabHandler}
              onKeyPress={handleKeyPress}
            >
              Services
            </div>
          </li>
          <li className={active(tab, 1)}>
            <div
              tab={1}
              tabIndex={-1}
              role="button"
              onClick={tabHandler}
              onKeyPress={handleKeyPress}
            >
              Helpdesk
            </div>
          </li>
          <li className={active(tab, 2)}>
            <div
              tab={2}
              tabIndex={-2}
              role="button"
              onClick={tabHandler}
              onKeyPress={handleKeyPress}
            >
              Joining Redbrick
            </div>
          </li>
          <li className={active(tab, 3)}>
            <div
              tab={3}
              tabIndex={-3}
              role="button"
              onClick={tabHandler}
              onKeyPress={handleKeyPress}
            >
              Past Exams
            </div>
          </li>
        </ul>
        {displayTab(tab)}
      </div>
    </Layout>
  );
}
