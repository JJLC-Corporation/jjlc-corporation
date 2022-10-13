import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowCard from '../components/ShowCard';
import QuoteComp from '../components/QuoteComp';

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
    <QuoteComp/>
    </>
  )
}

export default Dashboard