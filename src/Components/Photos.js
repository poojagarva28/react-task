import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CommonCss from "../CommonCss.module.css";

const Photos = () => {
  const params = useParams();
  const [photos, setphotos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setphotos(
          response.data.filter((item) => item.albumId === parseInt(params.id))
        );
      } catch (err) {
        console.error(err);
      }
    })();
  }, [params.id]);

  console.log(photos);

  return (
    <div className={CommonCss.albumContainer}>
      <h1>Photos</h1>
      <div className={CommonCss.BoxContainer}>
        {photos?.map((item) => (
          <div key={item.id} className={CommonCss.PhotoBox}>
            <a href={item.url} title={item.title}>
              <img src={item.thumbnailUrl} alt={item.title} />
              <span>{item.title}</span>
            </a>
            <div className={CommonCss.Overlay}>
              <a href={item.url} title={item.title}>
                <i className="fa fa-search-plus"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
