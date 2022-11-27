import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <div className='container'>
            <h1>Oooh No!</h1>
            <p>Sorry, error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage