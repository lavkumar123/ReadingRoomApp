import React from "react";
import BookCards from "./BookCards";
import list from "../../public/list.json";
import {Link} from 'react-router-dom'
function Premium() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl  md:text:4xl">
            Exclusive Collection
            <span className="text-pink-500">: Premium Books</span>
          </h1>
          <p className="mt-12">
            Dive into our exclusive collection of premium books, featuring rare
            editions and bestselling titles from renowned authors. Elevate your
            reading experience with stories that captivate and inspire, all
            carefully curated for discerning readers.
          </p>
          <Link to={'/'}>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {list.map((item) => (
            <BookCards kay={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Premium;
