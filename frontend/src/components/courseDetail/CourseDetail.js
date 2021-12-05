import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const CourseDetail = () => {
  const navigate = useNavigate();
  const param = useParams();

  const [id, setId] = useState();
  const [description, setDescription] = useState();

  const INSTRUCTOR = "in28minutes";
  const COURSE_API_URL = "http://localhost:9090";
  const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;

  //하나만 가져오기
  const retrieveCourse = useCallback(
    async (id) => {
      const response = await axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
      console.log(response.data);
      const { description } = response.data;
      setDescription(description);
    },
    [INSTRUCTOR_API_URL]
  );

  //유효성 검사
  const validate = (value) => {
    let errors = {};
    if (!value.description) {
      errors.description = "Enter a Description";
    } else if (value.description.length < 5) {
      errors.description = "Enter at least 5 Characters in Description";
    }
    return errors;
  };

  useEffect(() => {
    setId(param.id);
    retrieveCourse(param.id);
  }, [retrieveCourse, param.id]);

  if (id === -1) {
    return;
  }

  const updateCourse = async (name, id, course) => {
    return await axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
  };

  const createCourse = async (name, id, course) => {
    return await axios.post(`${INSTRUCTOR_API_URL}/courses`, course);
  };

  //수정 제출 함수
  const submitCourse = (value) => {
    console.log(value);
    let username = INSTRUCTOR;

    let course = { id, username, description: value.description };

    if (id === -1) {
      createCourse(username, course);
      navigate(`/courses`);
    } else {
      updateCourse(username, id, course);
      navigate(`/courses`);
    }
  };

  return (
    <div>
      <h3>Course</h3>
      <div className="container">
        <Formik
          initialValues={{ id: id || "", description: description || "" }}
          onSubmit={submitCourse}
          validateOnChange={false}
          validateOnBlur={false}
          validate={validate}
          enableReinitialize={true}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />
              <fieldset className="form-group">
                <label>Id</label>
                <Field
                  className="form-control"
                  type="text"
                  name="id"
                  disabled
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                />
              </fieldset>
              <button className="btn btn-success" type="submit">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CourseDetail;
