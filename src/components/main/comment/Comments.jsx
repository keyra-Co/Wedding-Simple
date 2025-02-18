import './Comments.css';

// Data Comments
import { comments } from '../../../data/dataComments.js';

// Components Ornamens
import { OrnamensTop, OrnamensDown } from '../../ornamen/Ornamen';

// Animate
import { useAnimate } from '../../../utils/observ';

// Comments Form and Show
import CommentForm from './commentForm/CommentForm.jsx';
import ShowComment from './showComment/ShowComments.jsx';

export default function Comments() {
  const setRef = useAnimate();

  return (
    <section className="comment section">
      <OrnamensTop />
      <h2 ref={setRef} className="comment__title hiddenUp">
        Ucapkan Sesuatu
      </h2>
      <p ref={setRef} className="comment__paragraph hiddenDown">
        Berikan ucapan & do&apos;a restu
      </p>
      <div className="comment__container">
        <CommentForm comments={comments} />
        <ShowComment comments={comments} />
      </div>
      <OrnamensDown />
    </section>
  );
}
