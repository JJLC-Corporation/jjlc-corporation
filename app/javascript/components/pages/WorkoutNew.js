import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, Input, Button, Card } from "reactstrap";

const WorkoutNew = ({ createWorkout, logged_in, current_user }) => {
  const navigate = useNavigate();
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    set_reps: "",
    weight: "",
    user_id: current_user.id
  });
  const handleWorkouts = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    createWorkout(newWorkout);
    navigate("/workoutindex");
  };
console.log('workoutnew',current_user);
  return (
    <>
      {logged_in && <h1>Add A Workout</h1>}
      {logged_in && (
        <div className="form">
        <Card className="new-form" style={{height:'15rem', width:'40rem'}}>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  name="name"
                  placeholder="Enter a name for your workout"
                  type="text"
                  onChange={handleWorkouts}
                  value={newWorkout.name}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="set_reps">Sets x Reps</Label>
                <Input
                  name="set_reps"
                  placeholder="Enter your Sets and Reps"
                  type="text"
                  onChange={handleWorkouts}
                  value={newWorkout.set_reps}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="weight">Weight</Label>
            <Input
              name="weight"
              placeholder="Enter the weight"
              type="text"
              onChange={handleWorkouts}
              value={newWorkout.weight}
            />
          </FormGroup>
          <Button onClick={handleSubmit} name="submit">
            Submit your workout
          </Button>
        </Form>
        </Card>
        </div>
      )}
      {!logged_in && <h1>Please sign in</h1>}
    </>
  );
};

export default WorkoutNew;
