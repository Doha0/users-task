// imports
import { useEffect, useState } from "react";
import "./Home.css";
import Users from "../Users/Users";

const Home = () => {
  // using useStates to set data
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("");

  // using useEffect to fetch data
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data?.users));
  }, []);

  // searching function to find user
  const handleSearch = (e) => {
    e.preventDefault();

    const filteredUsers = users.filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(searchInput.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // filtering function
  const sortUsers = (criteria) => {
    switch (criteria) {
      case "firstName":
        return users
          .slice()
          .sort((a, b) => a.firstName.localeCompare(b.firstName));
      case "email":
        return users.slice().sort((a, b) => a.email.localeCompare(b.email));
      case "companyName":
        return users
          .slice()
          .sort((a, b) => a.company.name.localeCompare(b.company.name));
      default:
        return users;
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center bg-rose-100 px-2 py-2 mb-4 rounded-md">
        {/* form to search by firstName and lastName */}
        <form
          onSubmit={handleSearch}
          className="flex justify-center gap-4 mb-4 lg:mb-0"
        >
          <input
            type="text"
            required
            placeholder="Search here"
            className="h-10 w-full px-2 py-1 rounded focus:outline-none focus:ring focus:border-rose-300 ring-2 ring-rose-300 ring-inset"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-800 text-white font-semibold px-4 py-2 rounded mr-2"
          >
            Search
          </button>
        </form>
        {/* Dropdown for sorting by First Name Email and Company Name */}
        <div className=" flex justify-center lg:justify-end mb-2 lg:mb-0">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full lg:w-72 h-10 px-2 rounded focus:outline-none focus:ring focus:border-rose-300 ring-2 ring-rose-300 ring-inset"
          >
            <option value="">Sort</option>
            <option value="firstName">First Name</option>
            <option value="email">Email</option>
            <option value="companyName">Company Name</option>
          </select>
        </div>
      </div>
      <div className="home-layout">
        {/* Display sorted users */}
        {sortUsers(sortBy).map((user) => (
          <Users key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Home;
