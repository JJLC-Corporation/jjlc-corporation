import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'

const WorkoutShow = ({workouts, current_user}) => {

const { id } = useParams()
const workout = workout?.find(workout => workout.user_id === current_user.id)
console.log(workouts);

  return (
    <>
    <div className='WorkoutShow'><Card >
        
        <CardBody>
          <CardTitle tag="h5">
            { workout.name }
          </CardTitle>
          <CardText>
            <p>Sets x Reps {workout.set_reps}</p>
          </CardText>
          <CardText>
            <p>Anthem: {workout.weight}</p>
          </CardText>
            <NavLink to={`/workoutedit/${workout.id}`} className="nav-link">
            <Button>
            Edit Profile
            </Button>
            </NavLink>
        </CardBody>
      </Card>
      </div>
    </>
    )
}

export default WorkoutShow