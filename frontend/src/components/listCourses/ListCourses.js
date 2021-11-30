import { useNavigate } from "react-router-dom";
const ListCourses = (props) => {
  const navigate = useNavigate();

  const deleteHandler = (id) => {
    console.log(id);
    props.deleteCourse(id);
  };

  const updateHandler = (id) => {
    navigate(`/courses/${id}`);
  };

  const addHandler = () => {
    navigate("/courses/-1");
  };

  return (
    <div className="container">
      <h3>All Courses</h3>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.courseList.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.description}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={(e) => {
                      updateHandler(course.id);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => {
                      deleteHandler(course.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <button className="btn btn-success" onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};

export default ListCourses;
