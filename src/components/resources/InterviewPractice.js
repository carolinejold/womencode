import React from "react";
import Fade from "react-reveal/Fade";

const InterviewPractice = () => {
  return (
    <div className="resources-section-container">
      <Fade>
        <h1>Interview Practice</h1>
        <p>
          <a
            href={`https://dev.to/maxpou/typical-javascript-interview-exercises-explained`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Typical JavaScript Interview Questions Explained
          </a>
          <br />A simple list of beginners JavaScript interview questions
          explained with clear code examples.
        </p>
      </Fade>
    </div>
  );
};

export default InterviewPractice;
