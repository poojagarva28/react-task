import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommonCss from "../CommonCss.module.css";

const Albums = () => {
  const params = useParams();
  const [albums, setAlbums] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setAlbums(
          response.data.filter((item) => item.userId === parseInt(params.id))
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, [params.id]);

  return (
    <div className={CommonCss.container}>
      <h1>Albums</h1>
      <div className={CommonCss.outerTable}>
        <table>
          <thead>
            <tr>
              <th>userId</th>
              <th>albumId</th>
              <th>album Name</th>
              <th>Photos</th>
            </tr>
          </thead>
          <tbody>
            {albums?.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <Link to={`/photos/${item.id}`}>
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
    </div>
  );
};

export default Albums;
