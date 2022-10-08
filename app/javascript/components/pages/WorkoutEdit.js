import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";


const WorkoutEdit = ({ workouts, updateWorkout, logged_in}) => {
  const { id } = useParams();

  const currentWorkout = workouts?.find((workout) => workout.id === +id);

  const [editWorkout, setEditWorkout] = useState(workouts);

  const handleWorkouts = (e) => {
    setEditWorkout({ ...editWorkout, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = () => {
    updateWorkout(editWorkout, currentWorkout.id);
    navigate("/workoutindex");
  };
  return (
    <div className="Update">
      <>
        {logged_in && <h2> Update Workout </h2>}
        {logged_in && (
          <Form>
            <FormGroup>
              <Label for="name">Workout Name</Label>
              <Input
                name="name"
                placeholder="Change workout name"
                type="text"
                onChange={handleWorkouts}
                value={workouts.name}
              />
              <Label for="set_reps">Sets x Reps</Label>
              <Input
                name="set_reps"
                placeholder="Change your Sets/Reps "
                type="text"
                onChange={handleWorkouts}
                value={workouts.set_reps}
              />
              <Label for="weight">Change weight</Label>
              <Input
                name="weight"
                placeholder="Change weight"
                type="number"
                onChange={handleWorkouts}
                value={workouts.weight}
              />
            </FormGroup>
            <Button onClick={handleSubmit} name="submit">
              Update
            </Button>
          </Form>
        )}
        {!logged_in && <h1>Please sign in</h1>}
      </>
    </div>
  );
};

export default WorkoutEdit;
