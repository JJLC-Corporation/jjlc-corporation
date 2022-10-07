import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";


const WorkoutEdit = ({ workouts, updateWorkout, logged_in}) => {
  const { id } = useParams();

  const currentWorkout = workouts?.find((workout) => workout.id === +id);

  const [editWorkout, setEditWorkout] = useState({
    name: currentWorkout.name,
    set_reps: currentWorkout.set_reps,
    weight: currentWorkout.weight,
   
  });

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
                value={editWorkout.name}
              />
              <Label for="sets x reps">Sets x Reps</Label>
              <Input
                name="setsxreps"
                placeholder="Change your Sets/Reps "
                type="text"
                onChange={handleWorkouts}
                value={editWorkout.set_reps}
              />
              <Label for="weight">Change weight</Label>
              <Input
                name="weight"
                placeholder="Change weight"
                type="number"
                onChange={handleWorkouts}
                value={editWorkout.weight}
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
