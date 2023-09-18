import React from "react";
import { FaPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import { AiTwotoneStar } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import {
  MdOutlineLibraryBooks,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { Progress } from "reactstrap";
export default function UpcomingTasks(props) {
  const tasks = [
    {
      Name: "UX UI Task",
      type: "Designing",
      Progress: 85,
      time: "4 Days Left",
      img: "https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg?w=500",
    },
    {
      Name: "Creating Perfect Website",
      type: "Web Developer",
      Progress: 75,
      time: "4 Days Left",
      img: "https://img.freepik.com/free-photo/close-up-man-writing-code-laptop_158595-5169.jpg?w=500",
    },
    {
      Name: "Testing",
      type: "QA",
      Progress: 95,
      time: "4 Days Left",
      img: "https://img.freepik.com/free-photo/young-graphic-designer-working-office_158595-1132.jpg?w=500",
    },
    {
      Name: "Creating Perfect blog",
      type: "Web Developer",
      Progress: 75,
      time: "4 Days Left",
      img: "https://img.freepik.com/free-photo/close-up-man-writing-code-laptop_158595-5169.jpg?w=500",
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
          <span className="mb-0 ps-2 h5">Upcoming Task</span>
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
        
  
        {tasks.map((item,i)=>{
          return (
            <SwiperSlide>
            <div className="rounded bg-white p-3" key={i}>
            <img
              className="rounded w-100 object-fit-center task-thumbnail"
              src={item.img}
            />
            <div className="mb-2">
              <h6 className="mb-0 mt-2">{item.Name}</h6>
              <span className="text-secondary">{item.type}</span>
            </div>
            <div className="w-100 d-flex align-items-center justify-content-between fw-bold mb-1"><span className="text-primary">Progress</span>  <span className="text-primary">{item.Progress}%</span></div>
          
            <Progress value={item.Progress} color="primary"/>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <IoMdTime style={{ width: 25, height: 25 }} />
                <span className="ms-2 fw-bold">{item.time}</span>
              </div>
              <div className="d-flex align-items-center">
                <span className="ms-2 group-images">
                  <img
                    className="rounded-img"
                    src="https://img.freepik.com/free-photo/close-up-portrait-cheerful-glamour-girl-with-cute-make-up-smiling-white-teeth-looking-happy-camera-standing-blue-background_1258-70300.jpg?w=100"
                  />
                  <img
                    className="rounded-img"
                    src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=100"
                  />
                  <img
                    className="rounded-img"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=100"
                  />
                  <img
                    className="rounded-img"
                    src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?w=100"
                  />
                  <img
                    className="rounded-img"
                    src="https://img.freepik.com/free-photo/positive-pleased-male-with-curly-hair_176532-8136.jpg?w=100"
                  />
                </span>
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
