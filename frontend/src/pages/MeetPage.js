import React, { useState, useEffect } from "react";
import User from "../components/User";
import Message from "../components/Message";
import { IoMdMic, IoMdMicOff, IoIosSend } from "react-icons/io";
import { PiVideoCameraFill, PiVideoCameraSlashFill } from "react-icons/pi";
import { MdPresentToAll, MdCallEnd } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";

export default function MeetPage() {
  const [mic, setMic] = useState(false);
  const [camera, setCamera] = useState(false);
  const [presenting, setPresenting] = useState(false);
  const { meetId } = useParams();
  const [currentDateTime, setCurrentDateTime] = useState(
    moment().format("MMMM Do YYYY, dddd, h:mm a")
  );
  // State to hold messages, initially set to null
  const [messages, setMessages] = useState([]);
  // State to control the visibility of message box
  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);
  // State to hold the admin message
  const [adminMessage, setAdminMessage] = useState("");

  // Dummy data for users

  const users = [
    { id: 1, name: "wkjwe" },
    { id: 2, name: "mwenfo" },
    { id: 3, name: "fewnfkwe" },
    { id: 4, name: "enjkwe" },
    { id: 5, name: "sfewfje" },
    { id: 6, name: "kewn" },
  ];

  useEffect(() => {
    const secondsTimer = setInterval(() => {
      setCurrentDateTime(moment().format("MMMM Do YYYY, dddd, h:mm a"));
    }, 1000);
    return () => clearInterval(secondsTimer);
  }, [setCurrentDateTime]);

  // Function to handle message see action
  const toggleMessageBox = () => {
    setIsMessageBoxOpen(!isMessageBoxOpen);
  };

  // Function to handle admin sending a message
  const sendAdminMessage = () => {
    if (adminMessage.trim() !== "") {
      // Create a new message with the user's name
      const user = users.find((user) => user.id === 1); // Change user id as needed
      const newMessage = { user: user, msg: adminMessage.trim() };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setAdminMessage(""); // Clear the input field after sending the message
    }
  };

  return (
    <>
      <div>
        <div className="fixed top-0 bg-white w-full flex justify-between p-2">
          <span className="text-lg md:text-2xl font-semibold text-gray-800 md:ml-10">
            {meetId}
          </span>
          <span className="text-lg md:text-2xl font-semibold text-gray-800 md:mr-10">
            {currentDateTime}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-12 pt-2 justify-center bg-gray-700 pb-5 mt-12">
          {users.map((user) => (
            <User
              key={user.id}
              name={user.name}
              isMessageBoxOpen={isMessageBoxOpen}
            />
          ))}
        </div>
        {isMessageBoxOpen && (
          <div className="bg-gray-100 fixed top-0 right-0 w-[350px] lg:w-[30%] h-[100%] z-10 shadow-lg">
            <h2 className="mt-2 text-center text-xl font-semibold">Messages</h2>
            <span
              className="absolute top-2 right-2 font-bold text-lg cursor-pointer"
              onClick={toggleMessageBox}
            >
              X
            </span>
            <div className="p-2 mb-12">
              {messages !== null && <Message messages={messages} />}
            </div>
            <div className="flex items-center absolute bottom-0 w-full border border-1-solid bg-white p-2">
              <input
                type="text"
                value={adminMessage}
                onChange={(e) => setAdminMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-[70%] mr-2 outline-none mb-2"
              />
              <button className="" onClick={(e) => sendAdminMessage(e)}>
                <IoIosSend className="text-gray-700 text-2xl" />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center fixed bottom-0 bg-white w-full h-[7vh]">
        {mic === true ? (
          <div
            className="bg-green-500 rounded-full m-2 p-2 cursor-pointer"
            onClick={() => setMic(!mic)}
          >
            <IoMdMic className="text-xl text-white" />
          </div>
        ) : (
          <div
            className="bg-red-500 rounded-full m-2 p-2 cursor-pointer"
            onClick={() => setMic(!mic)}
          >
            <IoMdMicOff className="text-xl text-white" />
          </div>
        )}

        {camera === true ? (
          <div
            className="bg-green-500 rounded-full m-2 p-2 cursor-pointer"
            onClick={() => setCamera(!camera)}
          >
            <PiVideoCameraFill className="text-xl text-white" />
          </div>
        ) : (
          <div
            className="bg-red-500 rounded-full m-2 p-2 cursor-pointer"
            onClick={() => setCamera(!camera)}
          >
            <PiVideoCameraSlashFill className="text-xl text-white" />
          </div>
        )}

        {presenting === true ? (
          <div
            className="bg-green-500 rounded-full m-2 p-2 cursor-pointer"
            onClick={() => setPresenting(!presenting)}
          >
            <MdPresentToAll className="text-xl text-white" />
          </div>
        ) : (
          <div
            className="bg-red-500 rounded-full m-2 p-2 cursor-pointer"
            onClick={() => setPresenting(!presenting)}
          >
            <MdPresentToAll className="text-xl text-white" />
          </div>
        )}

        <Link to="/">
          <div className="bg-red-500 rounded-full m-2 p-2 cursor-pointer">
            <MdCallEnd className="text-xl text-white" />
          </div>
        </Link>
      </div>
      <div>
        <RiMessage2Line
          className="absolute right-2 md:right-[50px] bottom-3 text-3xl cursor-pointer"
          onClick={toggleMessageBox}
        />
      </div>
    </>
  );
}
