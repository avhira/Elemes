import style from '../css/Footer.module.css';
import logo from '../assets/logo.png';
import * as Icon from 'react-feather';

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div>
          <img src={logo} alt="logo" />
          <p className="footer__address footer--gray footer--space">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p>
          <div className={style.footer__social}>
            <Icon.Mail className="hero--success footer--hover" />
            <Icon.Phone className="hero--success footer--hover" />
            <Icon.Instagram className="hero--success footer--hover" />
          </div>
        </div>
        <div className="footer__items ">
          <h4>Category</h4>
          <a href="#" className="footer--gray">
            Cupcake
          </a>
          <a href="#" className="footer--gray">
            Pizza
          </a>
          <a href="#" className="footer--gray">
            Kebab
          </a>
          <a href="#" className="footer--gray">
            Salmon
          </a>
          <a href="#" className="footer--gray">
            Doughnut
          </a>
        </div>
        <div className="footer__items ">
          <h4>About Us</h4>
          <a href="#" className="footer--gray">
            About Us
          </a>
          <a href="#" className="footer--gray">
            FAQ
          </a>
          <a href="#" className="footer--gray">
            Report Problem
          </a>
        </div>
        <div className="footer__items footer--space">
          <h4>Newsletter</h4>
          <p className="footer--gray">Get now free 50% discount for alll products on your first order</p>
          <div className={style.footer_input_email}>
            <input className={style.footer__input} type="email" placeholder="Your email address" />
            <button className="button button--success button--white footer--button">SEND</button>
          </div>
          <div className={style.footer__contact}>
            <Icon.Mail className="hero--success" /> elemesid@gmail.com
          </div>
          <div className={style.footer__contact}>
            <Icon.Phone className="hero--success" /> 0888 1111 2222
          </div>
        </div>
      </div>
      <div className={style.footer__law}>
        <p>© 2021 Elemes id. All rights reserved</p>
      </div>
      <div className={style.footer__hamburger}>
        <div>
          <Icon.Menu className="footer--hamburger-item footer--hamburger-gray" />
          <p className={style['footer--hamburger-text']}>Home</p>
        </div>
        <div>
          <Icon.Menu className="footer--hamburger-item footer--hamburger-gray" />
          <p className={style['footer--hamburger-text']}>Promotions</p>
        </div>
        <div>
          <Icon.Menu className="footer--hamburger-item footer--hamburger-gray" />
          <p className={style['footer--hamburger-text']}>Others</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
