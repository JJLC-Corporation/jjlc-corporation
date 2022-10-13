import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCard from '../components/ShowCard';

const Dashboard = (props) => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!props.logged_in){
      navigate('/')
    }
  }
  ,[])
  return (
    <>
    <div>Dashboard</div>
    <ShowCard/>
    </>
  )
}

export default Dashboard