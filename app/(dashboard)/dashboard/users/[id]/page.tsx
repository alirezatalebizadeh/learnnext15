import Link from 'next/link'
import React from 'react'

const UserItem = ({ params }: { params: { id: string } }) => {
    const { id } = params
    return (
        <div>
            <h1>User Profile : {id}</h1>
            <Link href={`/dashboard/users`}>users</Link>
        </div>
    )
}

export default UserItem
