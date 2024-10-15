import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorBoundary = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className='pt-20'>
     <h1>Oops! Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p><i>{error.statusText || error.message}</i></p>
      <Link to="/">Go back to home</Link>
    </div>
  )
}

export default ErrorBoundary