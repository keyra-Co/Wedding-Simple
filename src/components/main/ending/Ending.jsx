// Style Component
import './Ending.css';

// Animate
import { useAnimate } from '../../../utils/observ';

// // Background Component
// import Background from '../../background/Background';

// // Background Path
// import background from '../../../assets/decorations/bgRustic.png';

// Ornamens Component
import { OrnamensDown, OrnamensTop } from '../../ornamen/Ornamen';

export default function Ending() {
  const setRef = useAnimate();

  return (
    <section className="ending section">
      <OrnamensTop />
      {/* <Background background={background} /> */}
      <div className="ending__closing-word">
        <p ref={setRef} className="ending__paragraph hiddenScale">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran
          dan doa restunya, kami mengucapkan terima kasih.
        </p>
        <h2 ref={setRef} className="ending__closing hiddenDown">
          Wassalamu&apos;alaikum Wr. Wb.
        </h2>
      </div>
      <div className="ending__thank-word">
        <p ref={setRef} className="ending__word hiddenUp">
          Two souls become one, two hearts beat as one
        </p>
        <h2 ref={setRef} className="ending__title hiddenUp">
          Lilianna & Mikail
        </h2>
        <p ref={setRef} className="ending__closer hiddenDown">
          - Thank You -
        </p>
      </div>
      <OrnamensDown />
    </section>
  );
}
