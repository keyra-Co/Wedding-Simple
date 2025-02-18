/* eslint-disable react/prop-types */
// Style Component
import './CommentForm.css';

const CommentForm = ({ comments }) => {
  const hadir = comments?.filter((comment) => comment.attendance);
  const tidakHadir = comments?.filter((comment) => !comment.attendance);

  return (
    <div className="comment-form">
      <div className="comment-form__info">
        <div className="comment-form__info-item hadir">
          {hadir?.length} <span>Hadir</span>
        </div>
        <div className="comment-form__info-item">
          {tidakHadir?.length} <span>Tidak Hadir</span>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
