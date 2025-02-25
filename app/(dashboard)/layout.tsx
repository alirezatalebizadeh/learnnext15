import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    // throw new Error("Not implement")
    return (
        <div>
            <h1>Dashboard layout</h1>
            {children}
        </div>
    )
}

export default Layout
