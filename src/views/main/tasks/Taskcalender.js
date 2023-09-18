import React from "react";
import { Progress } from "reactstrap";
import { IoMdTime } from "react-icons/io";
import {
  MdOutlineLibraryBooks,
  MdArrowBackIos,
  MdArrowForwardIos,
} from "react-icons/md";
import { BiDotsHorizontal } from "react-icons/bi";
import Calendar from "../../../components/calender/Calender";
export default function Taskcalender(props) {
  return (
    <div className="p-3">
      <div
        className="text-primary ps-2 fw-bold cursor-pointer mt-3"
        onClick={() => props.onUpdate(true)}
      >
        <MdArrowBackIos />
        <span>Collapse</span>
      </div>
      <div className="p-3 bg-white my-3"> <Calendar /></div>
     
      <div className="rounded bg-white p-3">
        <div className="d-flex justify-content-between mb-3">
          <span>Task Today</span>
          <span className="cursor-pointer"><BiDotsHorizontal/></span>          
        </div>
        <img
          className="rounded w-100 object-fit-center task-thumbnail"
          src="https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-64857.jpg?w=500"
        />
        <div className="mb-2">
          <h6 className="mb-0 mt-2">UX UI Task</h6>
          <span className="text-secondary">Designing</span>
        </div>
        <div className="w-100 d-flex align-items-center justify-content-between fw-bold mb-1">
          <span className="text-primary">Progress</span>{" "}
          <span className="text-primary">85%</span>
        </div>

        <Progress value={85} color="primary" />
        <div className="d-flex align-items-center justify-content-between my-3">
          <div className="d-flex align-items-center">
            <IoMdTime style={{ width: 25, height: 25 }} />
            <span className="ms-2 fw-bold">4 Days Left</span>
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
        <hr/>
        <div className="d-flex align-items-center justify-content-between my-3">
          <span>Detail Task</span>
          <span>UI / UX Designer</span>          
        </div>
        <div className="d-flex my-3 align-items-center">
          <span className="p-3 px-4 rounded bg-light me-3">1</span>
          <span>Understanding the tools in Figma</span>          
        </div>
        <div className="d-flex my-3 align-items-center">
          <span className="p-3 px-4 rounded bg-light me-3">2</span>
          <span>Understand the basics of making designs</span>          
        </div>
        <div className="d-flex my-3 align-items-center">
          <span className="p-3 px-4 rounded bg-light me-3">3</span>
          <span>Design a mobile application with figma</span>          
        </div>
        <div className="w-100 p-3 cursor-pointer text-center bg-primary text-white rounded">Go To Detail</div>
        
      </div>
    </div>
  );
}
