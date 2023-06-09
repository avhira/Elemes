import style from '../css/Hero.module.css';
import hero from '../assets/hero.png';
import bg_hero from '../assets/bg-hero.png';
import * as Icon from 'react-feather';

const Hero = () => {
  return (
    <>
      <div className={style.hero}>
        <img src={bg_hero} alt="bg-hero" className={style.hero__bg_hero} />
        <div className={style.hero__main}>
          <h1 className="hero__header hero--success hero--nonaktif">Good Food Us Good Mood</h1>
          <p className={style['hero--text']}>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
          <div className={style.hero__buttons}>
            <button className="button button--success ">
              <a href="#" className="button--white">
                Daftar Sekarang
              </a>
            </button>
            <button className="button hero--aliceblue">
              <a href="#">About Us</a>
            </button>
          </div>
        </div>
        <div className={style.hero__bg_img}>
          <h1 className="hero__header hero--success hero--aktif">Good Food Us Good Mood</h1>
          <img src={hero} alt="hero img" className={style.hero__img_main} />
        </div>
        <div className={style.hero__promo}>
          <img src={hero} alt="promo" className={style.hero__promo_img} />
          <div>
            <h3 className={style.hero__promo_title}>Green Salad Tomato</h3>
            <p className={style.hero__promo_cat}>Tomato</p>
            <div>
              <Icon.Star className="hero__star hero--star-like" />
              <Icon.Star className="hero__star hero--star-like" />
              <Icon.Star className="hero__star hero--star-like" />
              <Icon.Star className="hero__star hero--star-like" />
              <Icon.Star className="hero__star hero--star-empty" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
