{
  /*
Author: Abu Jar Gifary Doha;
Date: 12/02/2024;
Description: ;
*/
}

import { MdEmail } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const Users = ({ user }) => {
  const { id, image, firstName, lastName, email, address, company } = user;
  return (
    <div className="h-72 md:h-80 lg:h-96 w-full max-w-md overflow-hidden bg-[#fcfcfd] rounded-lg shadow-lg p-4">
      <Link to={`/profile/${id}`}>
        <div className="grid justify-items-center flex-col ">
          <img
            className="object-cover object-center flex justify-items-center w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 rounded-lg bg-rose-50 p-2"
            src={image}
            alt="avatar"
          />

          <div className="px-2">
            <h1 className="text-xl font-semibold my-3 text-gray-800 ">
              {firstName} {lastName}
            </h1>

            {/* email */}
            <div className="flex items-center mt-2 text-gray-700 ">
              <MdEmail size={24} />

              <h1 className="px-2 text-sm">Email: {email}</h1>
            </div>

            {/* company name */}
            <div className="flex items-center mt-2 text-gray-700 ">
              <MdLocationCity size={24} />

              <h1 className="px-2 text-sm">Company: {company.name}</h1>
            </div>
            {/* address */}
            <div className="flex items-center mt-2 text-gray-700 ">
              <MdLocationPin size={24} />

              <h1 className="px-2 text-sm">
                Address: {address.address}, {address.city}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Users;
