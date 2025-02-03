/* eslint-disable react/prop-types */
// Style Component
import './CommentForm.css';

// React state
import { useState } from 'react';

const CommentForm = ({ comments, addComment }) => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState(false);
  const [lastCommentTime, setLastCommetTime] = useState(null);
  const [status, setStatus] = useState(null);

  const hadir = comments?.filter((comment) => comment.attendance);
  const tidakHadir = comments?.filter((comment) => !comment.attendance);

  // Fungsi untuk mengirim komentar
  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();

    if (lastCommentTime && now - lastCommentTime < 60000) {
      setStatus('Anda hanya bisa mengirim komentar setiap 1 menit.');
      return;
    }

    if (!name.trim() || !comment.trim() || attendance === null) {
      alert('Nama, komentar dan kehadiran tidak boleh kosong!');
      return;
    }

    setStatus('Mengirim...');

    try {
      await addComment({
        text: comment, // Menyaring input
        name,
        attendance,
        timestamp: Date.now(),
      });
      setComment('');
      setName('');
      setLastCommetTime(now);
      setStatus('Komentar berhasil dikirim!');
    } catch (error) {
      console.error('Error adding comment: ', error);
      setStatus('Gagal mengirim komentar, coba lagi!');
    }
  };

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
      <form className="comment-form__container" onSubmit={handleSubmit}>
        <input
          maxLength={20}
          minLength={3}
          className="comment-form__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama"
        />
        <textarea
          maxLength={200}
          minLength={3}
          className="comment-form__input"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Ucapan"
        />
        <select
          className="comment-form__select"
          value={attendance === null ? '' : attendance.toString()} // Pastikan value dalam string
          onChange={(e) => setAttendance(e.target.value === 'true' ? true : false)} // Memastikan nilai boolean
        >
          <option value="" disabled>
            Konfirmasi Kehadiran
          </option>
          <option value="true">Hadir</option>
          <option value="false">Tidak Hadir</option>
        </select>
        <button disabled={status === 'Mengirim...'} className="comment-form__btn btn" type="submit">
          {status === 'Mengirim...' ? 'Mengirim...' : 'Kirim Komentar'}
        </button>
        <div>{status && <p className="status">{status}</p>}</div>
      </form>
    </div>
  );
};

export default CommentForm;
