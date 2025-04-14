import React from "react";
import "./subscribesuccess.css";
import { Link, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";

const SubscribeSuccess = ({ user }) => {
    const {course} = CourseData();
  const params = useParams();
  return (
    <div className="subscribe-success-page">
      {user && (
        <div className="success-message">
          <h2>Subscribed Successfully</h2>
          <p> Your course subscription has been activated</p>
          <p>Reference Number: {course._id}</p>
          <Link to={`/${user._id}/dashboard`} className="common-btn">
            Go To Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubscribeSuccess;
