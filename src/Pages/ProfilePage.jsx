import React from 'react'
import UserProfile from "../features/user/components/UserProfile"
import Navbar from "../features/Auth/Components/Navbar"
const ProfilePage = () => {
  return (
    <div>
    <Navbar>
        <h1 className='mx-auto text-2xl'>My Profile</h1>
        <UserProfile></UserProfile>
        </Navbar>
    </div>
  )
}

export default ProfilePage
