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
      <>
        <h1>{`Welcome, ${props.current_user.name}`}</h1>
      </>
      <QuoteComp />
      <ShowCard />
    </>
  );
}

export default Dashboard