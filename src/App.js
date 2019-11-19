import React from 'react';
import './core.css';
import Navbar from './Components/navbar';
import Home from './Components/home';
import Status from './Components/status';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/about';
import Page from './Components/page';
import Committee from './Components/committee';
import Constitution from './Components/constitution';
import Regulations from './Components/regulations';
import societyPage from './Components/About/thesociety'
import contactPage from './Components/About/contact'
import Services from './Components/services';
import Help from './Components/help';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      events: [],
      pastEvents: [],
      slides: [],
      committee: [],
      images: [],
    }
    this.dataURL = "https://fraz.redbrick.dcu.ie/data.json"
    fetch(this.dataURL).then((resp) => {
      resp.json().then((js) => {
        let data = js
        console.log(data)
        this.setState({
          events: data[0],
          pastEvents: data[1],
          committee: data[2],
          slides: data[3],
          images: data[4],
        })
      })
    })
  }

  render(){

    const getRandomImages = (amount) => {
      let max = this.state.images.length
      if (amount >= max)
        return this.state.images
      let possibilites = Object.assign(this.state.images)
      while (possibilites.length > amount)
        {
          let val = Math.floor(Math.random() * possibilites.length)
          possibilites.splice(val, 1)
        }
      return possibilites
    }

    const images = getRandomImages(18)
  return (
    <Router>
    <div className="Core">
    {console.log(this.state)}

      <Navbar />
      <div className="Right">
        <Status />
        <Switch>
            <Route exact path="/">
              <Home images={images} pastEvents={this.state.pastEvents} slides={this.state.slides} events={this.state.events} isEventsPage={false} />
            </Route>
            <Route path="/Events">
              <Home events={this.state.events} pastEvents={this.state.pastEvents} slides={this.state.slides} isEventsPage={true}  />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route path="/About/The-Society">
                  <Page page={societyPage}/>
                </Route>
              <Route path="/About/Committee">
                <Committee year={"2019/20"} cmtmembers={this.state.committee} />
              </Route>
              <Route path="/About/Constitution">
                <Constitution />
              </Route>
              <Route path="/About/Contact">
                <Page page={contactPage} />
              </Route>
              <Route path="/About/Regulations">
                <Regulations />
              </Route>
            <Route path="/Help">
              <Help />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route>
              <h1 style={{marginLeft: "2em"}}>404 - Page not found :(</h1>
              <h2 style={{marginLeft: "3em"}}>If you think this is shouldn't be happening... email <a style={{color: "crimson" }}href="mailto:webmasted@redbrick.dcu.ie">me</a></h2>
              </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
}

export default App;
