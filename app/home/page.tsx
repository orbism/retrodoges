"use client"; // this is a client component
import  CarouselRD  from "../components/Carousel";

const images = [
    '/RD1.jpg',
    '/RD2.jpg',
    '/RD3.jpg',
    '/RD4.jpg',
    '/RD5.jpg',
    '/RD6.jpg',
    '/RD7.jpg',
  ];

  const HomePage = () => {

    

    return (
    
      <div className="homepage">
        <div className="infomatic">
          <p>
            6969 NFTs on the ETHEREUM Blockchain<br/>
            Lead by <a href="https://twitter.com/NFDtoken" target="_blank">FeistyDao</a> and <a href="https://twitter.com/Cryptopathic" target="_blank">Cryptopathic</a>
          </p>
        </div>
      
        <CarouselRD images={images} />
      </div>

    );

  };
  
  export default HomePage;
