import React, { useState, useEffect, useCallback } from "react";
import customAxios from "./components/customAxios/customAxios";
import "./App.css";
import InstructorApp from "./components/instructorApp/InstructorApp";
import axios from "axios";

function App() {
  const [courseList, setCourseList] = useState([]);
  const COURSE_API_URL = "http://localhost:9090";
  const INSTRUCTOR = "in28minutes";
  const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

  //한번만 실행되도록, 페지데이터
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`${INSTRUCTOR_API_URL}/courses`);
      setCourseList(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [INSTRUCTOR_API_URL]);

  //삭제
  const deleteCourse = async (id) => {
    
    console.log(id);
    return await axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
  };

  

  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container">
      <InstructorApp courseList={courseList} deleteCourse={deleteCourse}/>
    </div>
  );
}

export default App;
