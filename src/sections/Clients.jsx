import React from "react";
import { clientReviews } from "../constants";
const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear From My Clients</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, position, img, review }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light">{review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-sm md:text-base text-white-500">
                      {position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index + 1}
                      src="/assets/star.png"
                      alt="star"
                      className="size-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
