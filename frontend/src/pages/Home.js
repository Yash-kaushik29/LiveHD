import React, { useState } from "react";
import Header from "../components/Header";
import meet from "../images/meet.jpeg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlineVideoCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [meetId, setMeetId] = useState("");

  return (
    <div>
      <Header />
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
