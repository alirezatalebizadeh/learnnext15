import React from 'react'

const LayoutRoot = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h1 className="text-3xl">Navbar</h1>
            {children}
        </div>
    )
}

export default LayoutRoot
