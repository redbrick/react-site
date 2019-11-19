import React from 'react';
import '../core.css';

class Committee extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    const displayCommittee = () => {
        let members = []
        this.props.cmtmembers.map((member) => {
            members.push(
                <div className="Member">
                    <img src={member.image} />
                    <div className="Member-Name">{member.name}</div>
                    <div className="Member-Position">{member.position}</div>
                </div>
            )
        })
        return members
    }


  return (
    <div className="Main">
        <div className="Page-Section">
            <h1>Please be nice to...</h1>
            <h2>The committee for the {this.props.year} Year!</h2>
            <div className="Committee-Box">
                {displayCommittee()}
            </div>
        </div>
    </div>
  );
}
}

export default Committee;
