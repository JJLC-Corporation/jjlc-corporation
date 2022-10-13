import React from 'react'
import { Card, CardHeader, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const WorkoutIndex = ({workouts, current_user }) => {
  const filteredWorkouts = workouts?.filter(workout => workout.user_id === current_user.id)
  console.log(workouts);
  return (
    <>
    <div className="index-background">
      <h1 className="index-title"><i>WORKOUT <span className="plan">PLAN</span></i></h1>
      <div className="cards">
      {filteredWorkouts?.map((workout) => {
        return(
          <Card
            style={{
              width: '18rem'
            }}
          >
            <CardHeader className="workout">
              Workout
            </CardHeader>
              <ListGroup>
                <ListGroupItem className="list-group-item">
                  Name: {workout.name}
                </ListGroupItem>
                <ListGroupItem>
                  Sets/Reps: {workout.set_reps}
                </ListGroupItem>
                <ListGroupItem>
                  Weight: {workout.weight}lbs
                </ListGroupItem>
                <ListGroupItem>
                  <Button color="danger">
                    <NavLink to={`/workoutshow/${workout.id}`}>
                    See Workout
                    </NavLink>
                  </Button>
                </ListGroupItem> 
              </ListGroup>
          </Card>
        )
      })}
      </div>
      </div>
    </>
  )
}

export default WorkoutIndex