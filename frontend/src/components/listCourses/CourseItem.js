

const CourseItem = (props) => {
  
  return (
    <tr key={props.course.id}>
      <td>{props.course.id}</td>
      <td>{props.course.description}</td>
      <td>
        <button
          className="btn btn-success"
          onClick={(e) => {
            props.updateHandler(props.course.id);
          }}
        >
          Update
        </button>
      </td>
      <td>
        <button
          className="btn btn-warning"
          onClick={(e) => {
            props.deleteHandler(props.course.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CourseItem;
