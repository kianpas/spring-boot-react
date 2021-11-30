import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CourseDetail from "../courseDetail/CourseDetail";
import ListCourses from "../listCourses/ListCourses";

const InstructorApp = (props) => {
  return (
    <>
      <h1>Instructor Application</h1>
      <Routes>
        <Route
          path="/"
          element={
            <ListCourses
              courseList={props.courseList}
              deleteCourse={props.deleteCourse}
            />
          }
        />
        <Route
          path="courses"
          element={
            <ListCourses
              courseList={props.courseList}
              deleteCourse={props.deleteCourse}
            />
          }
        />
        <Route path="courses/:id" element={<CourseDetail />} />
      </Routes>
    </>
  );
};

export default InstructorApp;
