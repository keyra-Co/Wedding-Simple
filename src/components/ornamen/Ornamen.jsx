/* eslint-disable react/prop-types */
import './Ornamen.css';

import ornamenBig from '../../assets/ornamens/rusticFlowerRight.png';
import ornamenNormal from '../../assets/ornamens/rusticFlower2.png';
import ornamenSmall from '../../assets/ornamens/rusticFlower4.png';

import { useAnimate } from '../../utils/observ';

export function OrnamensTop() {
  return (
    <div aria-hidden className="ornamen-container top">
      <OrnamenItem init={'topL'} />
      <OrnamenItem init={'topR'} />
    </div>
  );
}

export function OrnamensDown() {
  return (
    <div aria-hidden className="ornamen-container down">
      <OrnamenItem init={'bottomL'} />
      <OrnamenItem init={'bottomR'} />
    </div>
  );
}

function OrnamenItem({ init }) {
  const setRef = useAnimate();
  return (
    <div ref={setRef} className={`ornamen-item ${init}`}>
      <div aria-hidden className="ornamen">
        <img aria-hidden src={ornamenBig} className="ornamen-image grow" />
      </div>
      <div aria-hidden className="ornamen normal">
        <img aria-hidden src={ornamenNormal} className="ornamen-image grow" />
      </div>
      <div aria-hidden className="ornamen small">
        <img aria-hidden src={ornamenSmall} className="ornamen-image grow" />
      </div>
    </div>
  );
}
