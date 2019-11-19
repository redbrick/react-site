import React from 'react';
import '../core.css';



class Services extends React.Component {
  render(){
  return (
    <div className="Main">
    <h1>Services</h1>
    <h2>We run lots of useful services! Quicklinks below...</h2>
    <hr />
    <div className="Blocks">
        <div className="Block">
            <a href="https://git.redbrick.dcu.ie">
                <i className="fa fa-git" /> Git
            </a>
        </div>
        <div className="Block">
            <a href="https://mail.redbrick.dcu.ie">
                <i className="fa fa-envelope" /> Mail
            </a>
        </div>
        <div className="Block">
            <a href="https://wiki.redbrick.dcu.ie">
                <i className="fa fa-info" /> Wiki
            </a>
        </div>
        <div className="Block">
            <a href="https://paste.redbrick.dcu.ie">
                <i className="fa fa-paste" /> Hastebin
            </a>
        </div>
        <div className="Block">
            <a href="https://md.redbrick.dcu.ie">
                <i className="fa fa-file" /> HackMD
            </a>
        </div>
        <div className="Block">
            <a href="https://mastodon.redbrick.dcu.ie">
                <i className="fa fa-share-alt-square" /> Mastodon
            </a>
        </div>
    </div>
    </div>
  );
}
}

export default Services;
