import React from 'react'
import { useParams } from "react-router-dom";
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  CardLink,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const WorkoutShow = ({ workouts, current_user }) => {
  const { id } = useParams();
  let currentWorkout = workouts.find((workout) => workout.user_id === current_user.id);
  return (
    <>
      <h1>View Your Workout</h1>
      {currentWorkout}
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Card"  />
        <CardBody>
          <CardTitle tag="h5">
            {currentWorkout.name} 
          </CardTitle>
        </CardBody>
        <ListGroup flush>
          <ListGroupItem>Sets x Reps: {currentWorkout.set_reps}</ListGroupItem>
          <ListGroupItem>Weight: {currentApartment.weight}</ListGroupItem>
        </ListGroup>
        <CardBody>
          <CardLink>
            <NavLink to="/workoutedit" className="nav-link">
              <Button>Edit Workout</Button>
            </NavLink>
          </CardLink>
          <CardLink>
            <NavLink to="/" className="nav-link">
              <Button>Delete Workout</Button>
            </NavLink>
          </CardLink>
        </CardBody>
      </Card>
    </>
  );
};

export default WorkoutShow;
