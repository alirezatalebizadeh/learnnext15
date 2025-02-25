import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <h1>Dashboard layout</h1>
            {children}
        </div>
    )
}

export default Layout
