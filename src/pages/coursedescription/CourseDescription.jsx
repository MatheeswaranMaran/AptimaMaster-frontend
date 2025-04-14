import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import toast from "react-hot-toast";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  const subscribeCourse = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/course/subscribe/${course._id}`,
        {},
        {
          headers: {
            token,
          },
        }
      );
      await fetchUser();
      await fetchCourses();
      await fetchMyCourse();
      toast.success(data.message);
      setLoading(false);
      navigate(`/subscribe-success/${course._id}`);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="course-description">
              <div className="course-header">
                <img
                  src={`${server}/${course.image}`}
                  alt=""
                  className="course-image"
                />
                <div className="course-info">
                  <h2>{course.title}</h2>
                  <p>Instructor: {course.createdBy}</p>
                  <p>Duration: {course.duration} weeks</p>
                </div>
              </div>
              <p>Let's get started with course At</p>

              {user && user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button onClick={subscribeCourse} className="common-btn">
                  Subscribe
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};
export default CourseDescription;
