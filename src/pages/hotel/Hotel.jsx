import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204549043.jpg?k=70e203636e31994b3ae1163b1321cf0c1667d1b92fdbca18bc9985a2aedc59d9&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402015254.jpg?k=863274253f006beec457dbd1d2ff7a8baf62a77ad4cf7f0e1847cfb3f171095a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402015236.jpg?k=3fe6e937194b2f78c75ebf65d73061ee8f738435a9c4f100b33c8bf7ce36e564&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402084746.jpg?k=f53331f1fe113cb8e7d36414a7bf3be969b29049d519de962e8468abd3011c8d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204550069.jpg?k=f5f5a2de606b033ec02a88f289c22caa35dc7411cd46149b267e33e9c8ae592e&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204550089.jpg?k=87e8e16734922d363f7befaca36294a9f44f5e0e5a4e15e40e5842c79db749cd&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500 m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  className="hotelImg"
                  src={photo.src}
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Lorem ipsum dolor sit amet.</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                voluptate, delectus repudiandae dolor hic sunt illum doloribus
                itaque aut cum perferendis ex quisquam adipisci magni nemo
                iusto, doloremque, voluptatem eum saepe aspernatur nesciunt
                suscipit. Laboriosam expedita officiis ea accusamus aut dolor
                officia possimus consectetur. Sapiente, omnis. Nesciunt dolore
                vel asperiores alias sint numquam suscipit aliquid sed optio
                voluptas, quia, consequuntur doloribus facere in ad ut, rerum
                sit facilis iste animi itaque recusandae laboriosam. Vel ratione
                tempore ipsa ex quaerat eaque nostrum vitae corrupti dolores,
                atque iure, repudiandae commodi praesentium, similique laborum
                obcaecati. Exercitationem accusantium corrupti numquam labore
                dolores rem ipsa!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <h2>
                <b>$945</b> (9 nigths)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
