{
  /*
Author: Abu Jar Gifary Doha;
Date: 12/02/2024;
Description: ;
*/
}
// imports
import { useEffect, useState } from "react";
import "./Home.css";
import Users from "../Users/Users";

const Home = () => {
  // using useState to set data
  const [users, setUsers] = useState([]);
  // using useEffect to fetch data
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.users);
      });
  }, []);

  return (
    <section className="home-layout">
      {/* All Users Information*/}
      {users.map((user) => (
        <Users key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Home;
