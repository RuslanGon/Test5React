import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const NotFoundPage = () => {

const [timer, setTimer] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
      // setTimer(timer + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if(timer === 5){
    return <Navigate to='/' replace />
  }

  return (
    <div>
      <h2>Not found page 📛</h2>
      <h3>You will be redirected to home in {5 - timer} seconds</h3>
      <Link to='/' >
        <h1>Go home page 🔱</h1>
      </Link>
    </div>
  );
};

export default NotFoundPage;
