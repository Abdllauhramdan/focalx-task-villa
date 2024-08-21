import "./Hero.css";

const Hero = ({HeroTitle , HeroMain }) => {
  return (
    <div className="AB_Hero">
      <div className="AB_ContentHero">
        <span className="AB_TitleHero">{HeroTitle}</span>
        <h2 className="AB_HeadingHero">{HeroMain}</h2>
      </div>
    </div>
  );
};

export default Hero;
