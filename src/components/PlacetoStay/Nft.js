// import "../styles/Nfts.css";
// import heart from "../images/heart.svg";
// import star from "../images/star.svg";

const Nfts = ({nfts}) => {
  return (
    <div className="Nft">
      <img
        src={nfts.img}
        className="inspiration-img"
        alt="inspiration"
      />

      {/* <img src={heart} alt="" className="heart" /> */}

      <div className="inspiration-texts">
        <div className="inspiration-info">
          <p>Desert king</p>
          <p>1MBT per night</p>
        </div>

        <div className="inspiration-info">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>

        <div className="inspiration-star_rating">
          {/* <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Nfts;