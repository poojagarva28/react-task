import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonCss from "../CommonCss.module.css";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div className={CommonCss.container}>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>Company</th>
            <th>city</th>
            <th>zipcode</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.company.name}</td>
              <td>{item.address.city}</td>
              <td>{item.address.zipcode}</td>
              <td>
                <Link to={`/albums/${item.id}`}>
                  <span className="icons">
                    <i className="fa fa-eye" />
                    View
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
