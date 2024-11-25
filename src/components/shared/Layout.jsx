import React from 'react'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <div className="bg-sky-100">sidebar</div>
            <div className="p-4">
                <div className="bg-teal-200">header</div>
                <div>{<Outlet />}</div>
            </div>
        </div>
    )
}

export default Layout
