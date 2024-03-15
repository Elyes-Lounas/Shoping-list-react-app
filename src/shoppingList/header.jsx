import React from "react";

export default function Header({
  setTitle,
  setQuantity,
  showItemClickHandler,
}) {
  return (
    <>
      <h1 className="mt-md-0 mt-4 text-white text-center fw-bold">
        Shoping List
      </h1>

      <section className="input-sec d-md-flex gap-3 my-3">
        <div className=" d-flex gap-3">
          <input
            name="title"
            onChange={setTitle}
            type="text"
            placeholder="Title..."
          />
          <input
            name="quantity"
            onChange={setQuantity}
            type="number"
            placeholder="14"
          />
        </div>
        <button
          onClick={()=>{
            showItemClickHandler()
          }}
          className="add-btn px-3 w-100 mt-md-0 mt-2"
        >
          Add
        </button>
      </section>
    </>
  );
}
