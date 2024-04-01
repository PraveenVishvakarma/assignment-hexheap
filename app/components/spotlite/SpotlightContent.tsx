'use client'
import { spotlight } from "@/utils/sportsData";
import Container from "../Container"
import SportsCard from "../sports/SportsCard";
import SpotlightCard from "./SpotlightCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color:"black",  background: "black" }}
        onClick={onClick} 
      />
    );
  }

function SpotlightContent() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Container >
            <div className="m-16">
                <div className="p-10">
                  <div className=" flex flex-col items-center text-center  p-10">
                    <div className="text-2xl text-nowrap md:text-4xl lg:text-6xl my-10 font-bold">
                        Collection Spotlight
                    </div>
                    <p className="text-justify text-sm md:text-base">Discover Extraordinary moments with our spotlight collection metatickets-exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
                  </div>
                </div>   
            </div>
            <div className="slider-container mx-20">
                      <Slider {...settings}>
                          {spotlight.map((data: any) => <SpotlightCard key={data.id} data={data} />)}
                      </Slider>
            </div>
            <div className="mb-28">

            </div>
        </Container>
    );
}

export default SpotlightContent;