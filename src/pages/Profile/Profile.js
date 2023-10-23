import React, { useContext } from 'react'
import { AuthContext } from '../../Context/UserContext'

const Profile = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className="px-4 py-6 sm:flex gap-6 sm:px-16 mx-auto w-full">
    <div className="">
      <div className="relative rounded-lg py-10  bg-[#F6F6F6] px-4 sm:px-16">
        
        <img className="absolute top-4  right-3" src="/info.png" alt="" />
        <img
          className="mx-auto w-[180px] h-[180px] rounded-full"
          src={
            user?.photoURL  ? user?.photoURL  : "/profileImage.svg"
          }
          alt=""
        />
        <p className="text-center capitalize font-lato text-[20px] py-4 font-bold">
          {user?.displayName}
        </p>
        <p className="text-center font-lato text-[20px] py-4 font-bold">
          {user?.email}
        </p>
        <p className="text-center capitalize font-lato text-[20px] py-4 font-bold">
          Account-Type : {user?.role}
        </p>
        <p className="text-center capitalize font-lato text-[20px] py-4 font-bold">
          Login With : {user?.provider}
        </p>
      </div>
    </div>
    {/* 2 */}
    <div className="w-full px-4 sm:px-8 py-6">
      <h2 className="text-[28px] font-bold tracking-wide font-lato">My Profile Info</h2>
      <h2 className="text-[22px]  font-semibold tracking-wide font-lato">Contact Details</h2>
       
      {/* <ProfileComponent user={user} update={update} /> */}


    </div>
  </div>
  )
}

export default Profile