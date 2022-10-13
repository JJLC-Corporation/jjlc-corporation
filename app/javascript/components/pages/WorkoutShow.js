import React from "react";
import { Card, CardBody, CardTitle, Button, CardText } from "reactstrap";
import { NavLink, useParams } from "react-router-dom";
import DeleteConfirmation from "../components/DeleteConfirmation";

const WorkoutShow = ({ workouts, deleteWorkout }) => {
  const { id } = useParams();
  const workout = workouts?.find((workout) => workout.id === +id);

  const handleDelete = () => {
    deleteWorkout(id)
    console.log(workout)
  }

  return (
    <>
    <h1 className="show-title">
      <i><span className="my-title">My</span> Workout</i>
    </h1>
      <div className="WorkoutShow">
        <Card style={{ width: '25rem', height: '20rem' }} >
          <CardBody>
            <CardTitle tag="h5" className="card-t">{workout.name}</CardTitle>
            <CardText>SetsxReps: {workout.set_reps}</CardText>
            <CardText>Weight: {workout.weight}lbs</CardText>
              <div className="b-style">
                <div className="edit-button">
                <NavLink to={`/workoutedit/${workout.id}`} >
                  <Button color="danger">Edit Workout</Button>
                </NavLink>
                </div>
                <DeleteConfirmation  color="danger" handleDelete={handleDelete} />
              </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default WorkoutShow;
