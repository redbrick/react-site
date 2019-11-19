import React from 'react';
import '../core.css';

class Slides extends React.Component {

  render(){

    const mapSlides = () => {
      let slides = []
      this.props.slides.map((slide) => {
        slides.push(
            <div className="Event">
            <img className="Event-Featured" src={slide.image} alt={slide.name} />
            <div className="Event-Info">
                <div className="Event-Heading">
                    {slide.name}
                </div>
                <div className="Event-Tags">
                    <span className="Event-Tag"><i class="fa fa-user"></i>{slide.presenter}</span>
                    <span className="Event-Location"><i class="fa fa-calendar"></i>{slide.date}</span>
                </div>
                <a href={slide.link} style={{marginTop: "1em"}}><i class="Icon fa fa-slideshare"></i>View Slides</a>
            </div>
        </div>
        )
        return undefined
      })
      return slides
    }

  return (
    <div className="Events">
        <h5 className="Events-Header">View all our lovely slides from past events!</h5>
        {mapSlides()}
    </div>
  );
}
}

export default Slides;
