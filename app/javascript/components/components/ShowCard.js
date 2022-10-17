import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { NavLink, useParams } from "react-router-dom";

const ShowCard = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const [showCard, setShowCard] = useState({});
  const getShowCard = () => {
    fetch("/showcard/")
      .then((response) => response.json())
      .then((payload) => setShowCard(payload))
      .catch((error) => console.log("show last error", error));
  };
  useEffect(() => {
    getShowCard();
  }, []);
  if (showCard === null) {
    return (
      <>
        <h3>Todays Date</h3>
        <h3>{date}</h3>

        <div className="WorkoutShow">
          <Card style={{ width: "25rem", height: "35rem" }}>
          <img
                alt="gym"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrVfZyZAVg29rOUPfFvKCq9mFXm_ccztmCQ&usqp=CAU"
              />
            <CardBody>
              <CardTitle className="null-card" tag="h5">
                Please add a workout
              </CardTitle>
              <NavLink to={`/workoutnew`} className="nav-link">
                <Button>Add a Workout</Button>
              </NavLink>
            </CardBody>
          </Card>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="workout-dash-card">
          <h3 className="show-card-title"><i>LATEST WORKOUT</i></h3>
          <Card style={{ width: "25rem", height: "35rem" }}>
          <img
                alt="gym"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrVfZyZAVg29rOUPfFvKCq9mFXm_ccztmCQ&usqp=CAU"
              />
            <CardBody>
              <CardTitle tag="h5" className="card-t">{showCard.name}</CardTitle>
              <CardText className="show-info">Sets x Reps {showCard.set_reps}</CardText>
              <CardText className="show-info">Weight: {showCard.weight}</CardText>
              <NavLink to={`/workoutedit/${showCard.id}`} className="nav-link">
                <Button color="danger">Edit Workout</Button>
              </NavLink>
            </CardBody>
          </Card>
          </div>
      </>
    );
  }
};
export default ShowCard;
