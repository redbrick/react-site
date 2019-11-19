import React from 'react';
import '../core.css';

class ImageGrid extends React.Component {

  render(){
      const mapImages = () => {
          let display = []
          this.props.images.map((url) => {
            display.push(
                <img key={url} class="GridImage" src={url} alt={"Event"} />
            )
            return undefined
          })
          return shuffle(display)
      }

      
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


  return (
    <div className="ImageGrid">
        {mapImages()}
    </div>
  );
}
}

export default ImageGrid;
