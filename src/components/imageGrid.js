import React, { useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import { shuffle } from '../utils/shuffle';
import '../core.css';

export default function ImageGrid({
  images,
  preventScroll,
  showThumbnails,
  spinner,
  spinnerColor,
  spinnerSize,
  theme,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  if (!images) return;

  function gotoNext() {
    setCurrImg(currImg + 1);
  }

  return (
    <div>
      <div className="ImageGrid">
        {shuffle(
          images.map(([src], index) => (
            <a
              href={src}
              key={src}
              onClick={event => {
                event.preventDefault();
                setIsOpen(true);
                setCurrImg(index);
              }}
            >
              <img className="GridImage" src={src} alt={'Event'} />
            </a>
          )),
        )}
      </div>
      <ImgsViewer
        backdropCloseable
        currImg={currImg}
        imgs={images.map(([src]) => ({ src }))}
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
        preventScroll={preventScroll}
        showThumbnails={showThumbnails}
        spinner={spinner}
        spinnerColor={spinnerColor}
        spinnerSize={spinnerSize}
        theme={theme}
      />
    </div>
  );
}
