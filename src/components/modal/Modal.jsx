/* eslint-disable react/prop-types */
import './Modal.css';

// React use state
import { useState } from 'react';

export default function Modal() {
  const [copyMessage, setCopyMessage] = useState(''); // Menyimpan pesan copy
  const modal = document.getElementById('modal');

  const dataRekening = {
    name1: 'Mikail',
    rek1: 'Mandiri',
    noRek1: '0060012787366',
    name2: 'Lilianna',
    rek2: 'BRI',
    noRek2: '035601007860531',
  };
  function copyData(text) {
    navigator.clipboard.writeText(text);
    setCopyMessage('Berhasil dicopy!'); // Menampilkan pesan

    // Menghilangkan pesan setelah 2 detik
    setTimeout(() => {
      setCopyMessage('');
    }, 2000);
  }

  function onClick() {
    modal.close();
  }

  return (
    <dialog id="modal">
      {copyMessage && <div className="modal__message">{copyMessage}</div>}

      <ModalContent title={'Nomor Rekening'} onClick={onClick}>
        <ModalBtn name={dataRekening.name1} rek={dataRekening.rek1} noRek={dataRekening.noRek1} onClick={() => copyData(dataRekening.noRek1)} />
        <ModalBtn name={dataRekening.name2} rek={dataRekening.rek2} noRek={dataRekening.noRek2} onClick={() => copyData(dataRekening.noRek2)} />
      </ModalContent>
    </dialog>
  );
}

function ModalContent({ title, onClick, children }) {
  return (
    <div className="modal__container">
      <h2 className="modal__title">{title}</h2>
      <div className="line"></div>
      <div className="modal__body">{children}</div>
      <div className="line"></div>
      <button className="modal__btn-close btn" onClick={onClick}>
        close
      </button>
    </div>
  );
}

function ModalBtn({ name, rek, noRek, onClick }) {
  return (
    <div className="modal__btn-container">
      <h3 className="modal__name">{name}</h3>
      <ModalInfoRek noRek={noRek} rek={rek} />
      <button className="modal__btn-copy btn" onClick={onClick}>
        copy
      </button>
    </div>
  );
}

function ModalInfoRek({ rek, noRek }) {
  return (
    <div className="modal__info-rek-container">
      <h4>{rek}</h4>
      <p>{noRek}</p>
    </div>
  );
}
