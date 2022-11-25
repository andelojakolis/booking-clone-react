import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/972725.webp?k=fd02f291aa7cfc3ee3d096fc36946e73c74b82b22bfab63bf62a92140343c937&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dubrovnik</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/638617.webp?k=a8b73c57b82753dbbfe0295662fc2ebf05a10a303c09271aef12212f24ce05a4&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Split</h1>
          <h2>456 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/972750.webp?k=db5cc0de8ca24962fc95848ee789af3f45b82d2e2f73dea0bb4068a84f511410&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Šibenik</h1>
          <h2>789 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
