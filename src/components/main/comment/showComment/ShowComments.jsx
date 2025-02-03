/* eslint-disable react/prop-types */
import { format } from 'date-fns';

// Style Component
import './ShowComments.css';

import { useEffect } from 'react';

// Fungsi untuk format timestamp
const formatTimestamp = (timestamp) => {
  return format(new Date(timestamp), 'dd/MM/yyyy HH:mm');
};

export default function ShowComment({ loading, error, comments }) {
  useEffect(() => {}, [comments]); // Mengawasi perubahan pada state 'comments'

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const commentsData = comments.map((comment) => <ShowCommentItem key={comment._id} {...comment} />);

  return (
    <div className="show-comment__container">
      <h3 className="show-comment__title">Komentar ({comments.length})</h3>
      <ul className="show-comment__item-container">{comments.length === 0 ? <div className="kosong">Belum ada komentar</div> : commentsData}</ul>
    </div>
  );
}

function ShowCommentItem({ name, timeStamp, attendance, text }) {
  return (
    <li className="show-comment__item">
      <div className="show-comment__item-head">
        <h4 className="show-comment__name">{name}</h4>
        <p className="show-comment__time">{formatTimestamp(timeStamp)}</p>
      </div>
      <p className="show-comment__text">{text}</p>
      <p className="show-comment__kehadiran">Kehadiran: {attendance ? 'Datang' : 'Tidak Datang'}</p>
    </li>
  );
}
