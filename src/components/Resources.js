import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Community from "./resources/Community";
import Mentoring from "./resources/Mentoring";
import CodingPractice from "./resources/CodingPractice";
import InterviewPractice from "./resources/InterviewPractice";
import ReactResources from "./resources/ReactResources";

const Resources = () => {
  return (
    <div className="resources-container">
      <Fade>
        <h1 className="resources-title">Resources</h1>
        {/* TODO make this drop down for mobile */}
        <Router>
          <div>
            <nav className="resources-nav">
              <Link className="resources-nav__link" to="/resources/community">
                Community
              </Link>
              <Link className="resources-nav__link" to="/resources/mentoring">
                Mentoring
              </Link>
              <Link
                className="resources-nav__link"
                to="/resources/coding-practice"
              >
                Coding Practice
              </Link>
              <Link
                className="resources-nav__link"
                to="/resources/interview-practice"
              >
                Interview Practice
              </Link>
              <Link className="resources-nav__link" to="/resources/react">
                React
              </Link>
            </nav>
          </div>
          <br />

          {/* A <Switch> looks through its children <Route>s and */}
          {/* renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/resources/community">
              <Community />
            </Route>
            <Route path="/resources/mentoring">
              <Mentoring />
            </Route>
            <Route path="/resources/coding-practice">
              <CodingPractice />
            </Route>
            <Route path="/resources/interview-practice">
              <InterviewPractice />
            </Route>
            <Route path="/resources/react">
              <ReactResources />
            </Route>
          </Switch>
        </Router>
        {/* <Community />
        <Mentoring />
        <CodingPractice />
        <InterviewPractice />
        <ReactResources /> */}
      </Fade>
    </div>
  );
};

export default Resources;
