import React, { useEffect, useState } from "react";
import meet from "../images/meet.jpeg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const [meetId, setMeetId] = useState("");
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if(localStorage.getItem("name")) {
      setUser({
        name: localStorage.getItem("name"),
        email: localStorage.getItem('email'),
      })
      console.log(user);
    }
  }, [user])

  const logout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    setUser(null);
  }

  return (
    <div>
      <div className="bg-slate-400 p-4">
        <div className="w-full md:w-[80%] px-4 py-[10px] items-center flex justify-between mx-auto ">
          <div className="text-3xl font-bold">LiveHD</div>
          <ul className="flex text-black gap-5">
            {/* //adding setting icon */}
            <li>
              <IoSettingsOutline className="text-3xl" />
            </li>
            {/* //adding user icon  */}
            <li>
              <FaUserCircle
                className="text-3xl cursor-pointer"
                onClick={() => setShow(!show)}
              />
            </li>
          </ul>
          {show && (
            <div className="flex flex-col items-center justify-center py-2 w-[250px] absolute top-[70px] right-5 lg:right-[100px] bg-gray-100 rounded-xl shadow-lg">
              <button
                className="absolute top-2 right-4 font-bold"
                onClick={() => setShow(!show)}
              >
                X
              </button>
              <FaUserCircle className="text-8xl py-2 text-gray-600" />
              {user && <span className="font-semibold text-xl pb-2">{user.name}</span> }
              {!user ? <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const credentials = jwtDecode(JSON.stringify(credentialResponse));
                  const email = credentials.email;
                  const name = credentials.name;
                  localStorage.setItem("name", name);
                  localStorage.setItem("email", email);
                  setUser({
                    name,
                    email
                  })
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              : <button className="bg-blue-500 text-white font-semibold px-8 py-2 rounded-3xl my-2" onClick={logout}>
              Logout
            </button>}
              
              
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center bg-slate-700">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            src={meet}
            alt="meeting"
            className="aspect-square rounded-full object-cover w-[300px] mx-auto "
          />
          <div className="flex flex-col justify-center items-center">
            <button className=" bg-slate-400 text-[hsl(180,9%,98%)] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              <div className="flex items-center justify-center">
                <IoIosAddCircleOutline className="mx-2" />
                Create new meeting
              </div>
            </button>

            <div className="text-[hsl(180,9%,98%)] relative font-medium mx-auto md:mx-0 py-3 content-center">
              OR
            </div>

            <div className="relative w-[200px]">
              <input
                type="text"
                value={meetId}
                placeholder="Enter meeting code"
                className="w-full h-full bg-white text-[hsl(180,1%,26%)] rounded-md pl-10 pr-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setMeetId(e.target.value)}
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaRegKeyboard className="text-[hsl(180,1%,26%)]" />
              </span>
            </div>

            <button className="bg-slate-400 text-[hsl(180,9%,98%)] w-[200px] rounded-md font-medium my-1 mx-auto md:mx-0 py-3">
              <Link to={`/meet/${meetId}`}>
                <div className="flex items-center justify-center">
                  <MdOutlineVideoCall className="mx-2 " size={24} />
                  Join meeting
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
