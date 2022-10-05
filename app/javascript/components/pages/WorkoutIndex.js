import React from 'react'
import { Card, CardHeader, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const WorkoutIndex = ({workouts, current_user}) => {
  const filteredWorkouts = workouts?.filter(workout => workout.user_id === current_user.id)
  console.log(workouts);
  return (
    <>
    <h1>All Workouts</h1>
    {filteredWorkouts?.map((workout) => {
      return(
        <Card
          style={{
            width: '18rem'
          }}
        >
          <CardHeader>
            Workout
          </CardHeader>
            <ListGroup>
              <ListGroupItem>
                Name: {workout.name}
              </ListGroupItem>
              <ListGroupItem>
                Sets/Reps: {workout.set_reps}
              </ListGroupItem>
              <ListGroupItem>
                Weight: {workout.weight}
              </ListGroupItem>
              <ListGroupItem>
                <Button>
                  <NavLink to={`/workoutshow/${workout.id}`}>
                  See Workout
                  </NavLink>
                </Button>
              </ListGroupItem> 
            </ListGroup>
        </Card>
      )
    })}
    </>
  )
}

export default WorkoutIndex