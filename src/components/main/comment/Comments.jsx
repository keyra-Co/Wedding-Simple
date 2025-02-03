import './Comments.css';
// Data Comments

// // Background Path
// import background from '../../../assets/decorations/bgRustic1.png';

// // Background Component
// import Background from '../../background/Background';

// Components Ornamens
import { OrnamensTop, OrnamensDown } from '../../ornamen/Ornamen';

// Animate
import { useAnimate } from '../../../utils/observ';

// Load data comments
import useComments from '../../../utils/useComments.js';

// Comments Form and Show
import CommentForm from './commentForm/CommentForm.jsx';
import ShowComment from './showComment/ShowComments.jsx';

export default function Comments() {
  const { loading, error, addComment, comments } = useComments();

  const setRef = useAnimate();

  return (
    <section className="comment section">
      <OrnamensTop />
      {/* <Background background={background} /> */}
      <h2 ref={setRef} className="comment__title hiddenUp">
        Ucapkan Sesuatu
      </h2>
      <p ref={setRef} className="comment__paragraph hiddenDown">
        Berikan ucapan & do&apos;a restu
      </p>
      <div className="comment__container">
        <CommentForm comments={comments} addComment={addComment} />
        <ShowComment loading={loading} error={error} comments={comments} />
      </div>
      <OrnamensDown />
    </section>
  );
}
