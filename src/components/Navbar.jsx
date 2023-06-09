import style from '../css/Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <img src={logo} alt="logo" className={style.navbar__logo} />
        <div className={style.navbar__item}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <div className={style['navbar__aktif']}>
            <a href="#">Promotions</a>
            <div className="navbar__hot navbar--hot-aktif">HOT</div>
          </div>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
        </div>
        <div className={style.navbar__login}>
          <button className={style['navbar--nonaktif']}>
            <a href="#">Masuk</a>
          </button>
          <button className="button button--success">
            <a href="#" className="button--white">
              Daftar Sekarang
            </a>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
