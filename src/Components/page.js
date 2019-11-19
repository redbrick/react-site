import React from 'react';
import '../core.css';

class Page extends React.Component {
  constructor(props){
    super(props)
  }

  render(){

    const displayPage = () => {
        let page = []
        this.props.page.headings.map((heading, i) => {
            page.push(
                <div className="Page-Heading">
                    <h1>{heading}</h1>
                </div>
            )
        })
        let sections = []
        this.props.page.sections.map((section) => {
            sections.push(
                <div className="Section-Heading">
                <h1>{section.heading}</h1>
                <h2>{section.subtitle}</h2>
                </div>
            )
            section.paragraphs.map((para) => {
                sections.push(
                    <p className="Section">
                        {para}
                    </p>
                )
            })
        })
        page.push(sections)
        return page
    }


  return (
    <div className="Main">
        <div className="Page-Section">
            {displayPage()}
        </div>
    </div>
  );
}
}

export default Page;
