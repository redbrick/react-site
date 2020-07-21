import React, { useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import PropTypes from 'prop-types';
import { shuffle } from '../utils/shuffle.js';

export default function ImageGrid({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  if (!images) return <></>;

  function gotoNext() {
    setCurrImg(currImg + 1);
  }

  return (
    <div>
      <div className="ImageGrid">
        {shuffle(
          images.map((src, index) => (
            <a
              href={src}
              key={src}
              onClick={event => {
                event.preventDefault();
                setIsOpen(true);
                setCurrImg(index);
              }}
            >
              <img className="GridImage" src={src} alt="Event" />
            </a>
          )),
        )}
      </div>
      <ImgsViewer
        backdropCloseable
        currImg={currImg}
        imgs={images.map(src => ({ src }))}
        isOpen={isOpen}
        onClickImg={() => {
          if (currImg === images.length - 1) return;
          gotoNext();
        }}
        onClickNext={gotoNext}
        onClickPrev={() => {
          setCurrImg(currImg - 1);
        }}
        onClickThumbnail={index => {
          setCurrImg(index);
        }}
        onClose={() => {
          setCurrImg(0);
          setIsOpen(false);
        }}
      />
    </div>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
