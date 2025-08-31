import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contextService/Context";

const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AppContext);

  const userDetails = user.find((details) => details.id.toString() === id);

  if (!userDetails) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl font-bold">
        User Not Found 🚫
      </div>
    );
  }

  const { username, address, company, email, phone, website } = userDetails;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="w-[95%] md:w-[70%] lg:w-[50%] bg-gray-900 rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-green-400 mb-8">
          {userDetails.name}
        </h2>

        {/* User Info */}
        <div className="space-y-6">
          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Username :</span>
            <span>{username}</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Email :</span>
            <span>{email}</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Contact Number :</span>
            <span>{phone}</span>
          </div>

          <div className="flex flex-col border-b border-gray-700 pb-2">
            <span className="text-gray-400 mb-1">Company :</span>
            <span className="text-sm text-gray-300">
              {company?.name} • {company?.catchPhrase} • {company?.bs}
            </span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">City :</span>
            <span>{address?.city}</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Street :</span>
            <span>{address?.street}</span>
          </div>

          <div className="flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Zip-Code :</span>
            <span>{address?.zipcode}</span>
          </div>

          <div className="flex flex-col border-b border-gray-700 pb-2">
            <span className="text-gray-400 mb-1">Geo Location :</span>
            <div className="flex flex-col gap-1 text-sm text-gray-300">
              <span>🌍 Latitude: {address?.geo?.lat}</span>
              <span>🌍 Longitude: {address?.geo?.lng}</span>
            </div>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Website :</span>
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 hover:underline"
            >
              {website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
