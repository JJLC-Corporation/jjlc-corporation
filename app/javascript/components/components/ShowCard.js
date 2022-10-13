import React, { useEffect, useState} from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { NavLink, useParams } from "react-router-dom";



const ShowCard = () => {
    const [showCard, setShowCard] = useState({})
    const getShowCard = () => {
        fetch("/showcard/")
            .then((response) => response.json())
            .then((payload) => setShowCard(payload))
            .catch((error) => console.log("show last error", error))
    }
    useEffect(() => {
        getShowCard()
    }, [])
    return (
        <>
            <div className="WorkoutShow">
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{showCard.name}</CardTitle>
                        <CardText>Sets x Reps {showCard.set_reps}</CardText>
                        <CardText>Weight: {showCard.weight}</CardText>

                    </CardBody>
                </Card>
            </div>
        </>

    )
}

export default ShowCard 