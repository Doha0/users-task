{
  /*
Author: Abu Jar Gifary Doha;
Date: 12/02/2024;
Description: ;
*/
}

import { MdEmail, MdLocationCity, MdLocationPin } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const user = useLoaderData();

  const { image, firstName, lastName, email, address, company } = user;
  return (
    <div className="grid justify-center items-center px-6 py-16 mx-auto text-center bg-[#fcfcfd] shadow-lg max-w-lg">
      <div className="flex justify-center mb-4">
        <img
          className="object-cover object-center bg-rose-50 w-72 h-72 rounded-full -mx-2.5 ring-8 ring-rose-200"
          src={image}
          alt="Hero"
        />
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
          {firstName} {lastName}
        </h1>
        <div className="flex items-center mt-2 text-gray-700 ">
          <div className="px-2">
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
      </div>
    </div>
  );
};

export default Profile;
