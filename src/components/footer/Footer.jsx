/* eslint-disable react/prop-types */
// Style Component
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <FooterCreator />
      <FooterSong />
      <FooterInfo />
      <p className="copyright">© all rights reserved by keyraCo.</p>
    </footer>
  );
}

function FooterCreator() {
  return (
    <div className="footer__creator-container">
      <h3 className="footer__title">Made with 💖 by</h3>
      <h2 className="footer__creator">
        <Link text={'Bagas Saputra'} url={'https://www.instagram.com/bagasaputra666/'} />
      </h2>
    </div>
  );
}

function FooterInfo() {
  return (
    <div className="footer__info">
      <div className="contact">
        <h3 className="footer__title">My Contact Info</h3>
        <p className="footer__paragraph">WA : 085718333538</p>
        <Link text={'IG : bagasaputra666'} url={'https://www.instagram.com/bagasaputra666/'} />
        <Link url={'https://github.com/search?q=bagassaputra666&type=repositories'} text={'GitHub : BagasSaputra666'} />
        <Link url={'https://bagassaputra666.github.io/'} text={'My Portofolio Website'} />
      </div>
      <div className="credit">
        <h3 className="footer__title">Credit Thanks for</h3>
        <Link text={'Designed by Freepik'} url={'http://www.freepik.com'} />
        <Link text={'Icons by SVG Repo'} url={'https://www.instagram.com/svgrepo'} />
        <Link text={'Ornamens by PicsArt'} url={'https://picsart.com/id/">'} />
        <Link text={'Decorations by Canva'} url={'https://www.canva.com/">'} />
      </div>
    </div>
  );
}

function FooterSong() {
  return (
    <div className="footer__song-container">
      <h3 className="footer__title">Backsound by :</h3>
      <Link text={'Jaz - Bersamamu'} url={'https://youtu.be/D-VytLhH-KE?si=2vdW8zwe1p754iF3'} />
    </div>
  );
}

function Link({ url, text }) {
  return (
    <a className="footer__paragraph" href={url} target="_blank">
      {text}
    </a>
  );
}
