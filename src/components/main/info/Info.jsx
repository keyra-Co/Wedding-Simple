/* eslint-disable react/prop-types */
// Style Component
import './info.css';

// Utils
import { useEffect, useState } from 'react';

// CountDown
import { calculateTimeLeft } from '../../../utils/countDownTimer';

// Animate
import { useAnimate } from '../../../utils/observ';

// // Background Path
// import background from '../../../assets/decorations/bgRustic.png';

// // Background Component
// import Background from '../../background/Background';

// Ornamens Component
import { OrnamensDown, OrnamensTop } from '../../ornamen/Ornamen';

export default function Info() {
  // Target date for count down
  const targetDate = new Date('Feb 15, 2025 10:00:00').getTime();

  // Reference to element that will animated
  const setRef = useAnimate();

  // useState for calculate remaining time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Component that contain countdown element
  const dates = timeLeft.map((time) => <CountDownDate key={time.name} {...time} />);

  return (
    <section className="section info">
      <OrnamensTop />
      {/* <Background background={background} /> */}
      <div className="info__container-content">
        <InfoContent title={'Amplop Digital'} init={'gift'}>
          <p className="gift__description appearUpScroll timeline-slow">
            Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:
          </p>
          <GiftBtnContainer setRef={setRef} />
        </InfoContent>
        <InfoContent title={'Hari yang ditunggu'} init={'countDown'}>
          <div ref={setRef} className="countDown__date-container hiddenScale">
            {dates}
          </div>
        </InfoContent>
      </div>
      <OrnamensDown />
    </section>
  );
}

function InfoContent({ title, init, children }) {
  return (
    <div className={`info__content ${init}`}>
      <h2 className="info__content-title appearDownScroll timeline-fast">{title}</h2>
      {children}
    </div>
  );
}

function CountDownDate({ time, name }) {
  return (
    <div className="countDown__date">
      <div className="countDown__time">{time}</div>
      <div className="countDown__name">{name}</div>
    </div>
  );
}

function GiftBtnContainer({ setRef }) {
  const modal = document.getElementById('modal');

  return (
    <div ref={setRef} className="gift__btn-container hiddenScale">
      <button
        onClick={() => {
          modal.showModal();
        }}
        className="gift__btn btn"
      >
        <i className="bi bi-gift"></i>
        Kirim Hadiah
      </button>
    </div>
  );
}
