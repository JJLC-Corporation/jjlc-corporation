import React from "react";
import { Card, CardBody, CardTitle, Button, CardText } from "reactstrap";
import { NavLink, useParams } from "react-router-dom";

const WorkoutShow = ({ workouts, deleteWorkout }) => {
  const { id } = useParams();
  const workout = workouts?.find((workout) => workout.id === +id);

  const handleDelete = () => {
    deleteWorkout(id)
    console.log(workout)
  }

  return (
    <>
      <div className="WorkoutShow">
        <Card>
          <CardBody>
            <CardTitle tag="h5">{workout.name}</CardTitle>
            <CardText>Sets x Reps {workout.set_reps}</CardText>
            <CardText>Weight: {workout.weight}</CardText>
            <NavLink to={`/workoutedit/${workout.id}`} className="nav-link">
              <Button>Edit Workout</Button>
            </NavLink>
            <NavLink to={'/workoutindex'}>
              <Button onClick={handleDelete} name="submit">Delete Workout</Button>
            </NavLink>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default WorkoutShow;
