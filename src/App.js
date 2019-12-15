import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './components/home';
import Status from './components/status';
import About from './components/about';
import Page from './components/page';
import Committee from './components/committee';
import Constitution from './components/constitution';
import Regulations from './components/regulations';
import Services from './components/services';
import Help from './components/help';
import Error from './components/error';

import societyPage from './content/theSociety';
import contactPage from './content/contact';

import { shuffle } from './utils/shuffle';
import './core.css';

const getRandomImages = (images, amount) =>
  amount >= images.length ? images : shuffle(images).slice(0, amount);

export default function App() {
  const [events, setEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [slides, setSlides] = useState([]);
  const [committee, setCommittee] = useState([]);
  const [images, setImages] = useState([]);
  const dataURL = 'https://fraz.redbrick.dcu.ie/data.json';
  useEffect(() => {
    fetch(dataURL)
      .then(resp => resp.json())
      .then(data => {
        setEvents(data[0]);
        setPastEvents(data[1]);
        setCommittee(data[2]);
        setSlides(data[3]);
        setImages(data[4]);
      });
  }, [dataURL]);

  return (
    <Router>
      <div className="Core">
        <Navbar />
        <div className="Right">
          <Status />
          <Switch>
            <Route exact path="/">
              <Home
                images={getRandomImages(images, 18)}
                pastEvents={pastEvents}
                slides={slides}
                events={events}
                isEventsPage={false}
              />
            </Route>
            <Route path="/events">
              <Home events={events} pastEvents={pastEvents} slides={slides} isEventsPage={true} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/about/society">
              <Page page={societyPage} />
            </Route>
            <Route path="/about/committee">
              <Committee year="2019/20" members={committee} />
            </Route>
            <Route path="/about/constitution">
              <Constitution />
            </Route>
            <Route path="/about/contact">
              <Page page={contactPage} />
            </Route>
            <Route path="/about/regulations">
              <Regulations />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/401">
              <Error code="401" message="Permission Denied">
                You do not have permission to access this section. If you think this is an error
                please contact the{' '}
                <a style={{ color: 'crimson' }} href="mailto:webmaster@redbrick.dcu.ie">
                  webmaster
                </a>
              </Error>
            </Route>
            <Route path="/403">
              <Error code="403" message="Forbidden">
                Access to this section Forbidden.
              </Error>
            </Route>
            <Route path="/500">
              <Error code="500" message="Internal Server Error">
                An Unexpected Error has occured. Please try again or contact the{' '}
                <a style={{ color: 'crimson' }} href="mailto:webmaster@redbrick.dcu.ie">
                  webmaster
                </a>{' '}
                with details.
              </Error>
            </Route>
            <Route path="/503">
              <Error code="503" message="Service Unavailable">
                The server cannot handle the request because it is overloaded or down for
                maintenance.
              </Error>
            </Route>
            <Route>
              <Error code="404" message="Page not Found">
                The Page you are looking for could not be found. If you think this is an error
                please contact the{' '}
                <a style={{ color: 'crimson' }} href="mailto:webmaster@redbrick.dcu.ie">
                  webmaster
                </a>
              </Error>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
