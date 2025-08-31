import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Card = ({data,handledelete,handleUpdate}) => {

  const {name,email,phone,id} = data;
 
  return (
    <div
      className="rounded-tl-lg rounded-bl-lg rounded-br-lg overflow-hidden w-fit flex flex-col gap-2 h-auto p-4 bg-[#2a2a2a] transition transform hover:scale-[1.02] hover:shadow-lg"
      style={{ boxShadow: "var(--card-shadow)" }}
    >
      {/* Card Content */}
      <div className="space-y-2 text-white font-bold text-base">
        <div className="flex justify-between">
          <span>Name :</span> {name}
        </div>
        <div className="flex justify-between">
          <span>Email :</span> {email}
        </div>
        <div className="flex justify-between text-gray-300">
          <span>Contact :</span> {phone}
        </div>
      </div>
                                           {/* Edit and the update buttons */}
   <div className="flex flex-row justify-between gap-4">
      <button
  onClick={() => handleUpdate(data)}
  className="rounded-tl-lg h-10 w-20 bg-green-700 flex items-center justify-center hover:bg-red-600 transition text-white"
>
  Edit
</button>

<button
  onClick={() => handledelete(id)}
  className="rounded-tl-lg h-10 w-20 bg-red-700 flex items-center justify-center hover:bg-red-600 transition text-white"
>
  Delete
</button>


                                                           {/* details page  Button */}
     <NavLink 
  to={`/${id}`} 
  className="rounded-tl-lg h-10 w-20 bg-green-700 flex items-center justify-center hover:bg-green-600 transition"
>
  <FaArrowRight className="text-xl text-white" />
</NavLink>
   </div>
 
    </div>
  );
};

export default Card;
