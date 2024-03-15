import React from "react";

export default function Total({ total }) {
  return (
    <div>
      {total !== 0 && (
        <h4 className="fs-6 text-white mt-4">
          Total items:<span className="text-yellow fw-bold ps-2">{total}</span>
        </h4>
      )}
    </div>
  );
}
