import axios from "axios";

const customAxios = async () => {
  const INSTRUCTOR = "in28minutes";
  const COURSE_API_URL = "http://localhost:9090";
  const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`;
 
  const response = await axios({
    url: `${INSTRUCTOR_API_URL}/courses`,
    method: "get",
  });
  
  return response.data;
};


export default customAxios;
