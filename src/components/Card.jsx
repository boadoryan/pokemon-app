import React from "react";

const Card = ({ cardTitle }) => {
  return (
    <>
      <div className="w-full my-4">
        <div className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
          {cardTitle}
        </div>
      </div>
      ;
    </>
  );
};

export { Card };
