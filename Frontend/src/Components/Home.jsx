import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

function Home() {
    const user = useSelector((state) => state.users.value)
    return (
        <>
            <Navigation user={user} />
            <div className="">
                <Outlet />
            </div>
        </>
    )
}

export default Home