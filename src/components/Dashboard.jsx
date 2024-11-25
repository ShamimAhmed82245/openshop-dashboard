import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div>
            <p>Dashboard</p>
            <Link to="/products" className="underline">
                {' '}
                go to Product Page{' '}
            </Link>
        </div>
    )
}

export default Dashboard
