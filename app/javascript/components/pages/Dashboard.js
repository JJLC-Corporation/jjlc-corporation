import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShowCard from "../components/ShowCard";
import QuoteComp from "../components/QuoteComp";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const Dashboard = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.logged_in) {
      navigate("/");
    }
  }, []);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <div className="div-padding">
        <img
          src="https://i.postimg.cc/L6vcPfgc/logo-1.png"
          className="about-logo"
        ></img>
      </div>
      <div className="dash-header">
        <h1 className="d-header-styling">
          <i>{`WELCOME ${props.current_user.name}! IT'S TIME TO .LIFT`}</i>
        </h1>
      </div>
      <div className="comp-arrange">
        <div className="quote-date">
          <div className="date-div">
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                alt="gym"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrVfZyZAVg29rOUPfFvKCq9mFXm_ccztmCQ&usqp=CAU"
              />
              <CardBody>
                <CardTitle tag="h5">Today's Date</CardTitle>
                <CardText>{date}</CardText>
              </CardBody>
            </Card>
          </div>
          <QuoteComp />
        </div>
        <ShowCard />
      </div>
    </>
  );
};

export default Dashboard;
