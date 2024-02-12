{
  /*
Author: Abu Jar Gifary Doha;
Date: 12/02/2024;
Description: ;
*/
}

const Users = ({ user }) => {
  const { image, firstName, lastName, email, address, company } = user;
  return (
    <div className="max-w-md w-full overflow-hidden bg-white rounded-lg shadow-lg mx-auto mb-4 ">
      <div className="flex flex-col w-full h-[30dvh] lg:h-[30vh] p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {firstName} {lastName}
          </h2>
          <img
            className="w-16 h-16 object-cover object-center rounded-lg p-1 bg-sky-200"
            src={image}
            alt="User Avatar"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-gray-600 mb-2">{email}</p>
          <div className="mb-2">
            <p className="font-semibold">Address:</p>
            <p className="text-gray-600">
              {address.address}, {address.postalCode}, {address.city}
            </p>
          </div>
          <div className="mb-2">
            <p className="font-semibold">Company:</p>
            <p className="text-gray-600">{company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
