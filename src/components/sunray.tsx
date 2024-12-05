import React from "react";

const SunRay = () => {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 grid h-screen w-screen place-items-center">
        <ul className="light-rays relative size-full">
          {[...Array(32)].map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SunRay;
