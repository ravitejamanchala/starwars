import React from "react";
import { FaPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import { AiTwotoneStar } from "react-icons/ai";
import {
  MdOutlineLibraryBooks,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
export default function (props) {
  const contributors = [
    {
      Name: "Curious George",
      type: "UI UX Design",
      task: 40,
      ratings: "4.7  (750 Reviews)",
      img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=100",
    },
    {
      Name: "Marvin McKinney",
      type: "Web Developer",
      task: 40,
      ratings: "4.5  (550 Reviews)",
      img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=100",
    },
    {
      Name: "Esther Howard",
      type: "3D Designer",
      task: 40,
      ratings: "4.3  (750 Reviews)",
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=100",
    },
    {
      Name: "Curious George",
      type: "UI UX Design",
      task: 40,
      ratings: "4.7  (750 Reviews)",
      img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=100",
    },
    {
      Name: "Curious George",
      type: "UI UX Design",
      task: 40,
      ratings: "4.6  (750 Reviews)",
      img: "https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=100",
    },
  ];
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
      <div className="px-2 cursor-pointer" onClick={() => swiper.slideNext()}>
        {children}
      </div>
    );
  };
  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
      <div className="px-2 cursor-pointer" onClick={() => swiper.slidePrev()}>
        {children}
      </div>
    );
  };
  return (
    <div className="row  gx-3 mt-4">
      <Swiper
        spaceBetween={24}
        slidesPerView={props.col}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => swiper}
        className="pt-5 mt-2"
      >
        <div className="custom-navigation d-flex align-items-center justify-content-between w-100">
          <span className="mb-0 ps-2">Monthly Contributors</span>
          <div className="d-flex align-items-center justify-content-between">
            {" "}
            <SwiperButtonPrev>
              {" "}
              <MdArrowBackIos />
            </SwiperButtonPrev>
            <SwiperButtonNext>
              {" "}
              <MdArrowForwardIos />
            </SwiperButtonNext>
          </div>
        </div>
        {contributors.map((item,i)=>{
          return(
            <SwiperSlide>
            <div className="rounded bg-white p-3">
              <div className="d-flex align-items-center">
                <img
                  className="rounded-img"
                  src={item.img}
                />
                <div className="ps-2" style={{ width: "calc(100% - 50px)" }}>
                  <div className="d-flex justify-content-between align-items-center h6 mb-1">
                    <span className="-0">{item.Name}</span>
                    <span className="text-primary fw-bold cursor-pointer">
                      <FaPlus></FaPlus> Follow
                    </span>
                  </div>
                  <span className="text-secondary">{item.type}</span>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center">
                  <MdOutlineLibraryBooks style={{ width: 25, height: 25 }} />
                  <span className="ms-2">{item.task} Task</span>
                </div>
                <div className="d-flex align-items-center">
                  <AiTwotoneStar
                    style={{ width: 25, height: 25, fill: "#FFB054" }}
                  />
                  <span className="ms-2">{item.ratings}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          )
        })}     
      </Swiper>
    </div>
  );
}
