import React from "react";

export default function ShopItem({ list, iBoughtItem, setList }) {
  let removeItem = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <main className="d-flex flex-column gap-4">
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className={`item-sec ${
              item.completed ? "active" : null
            } py-2 px-3 d-flex justify-content-between text-white align-items-center`}
          >
            <small className="numOfItems px-1">{item.quantity}</small>
            <h5
              onClick={() => iBoughtItem(index)}
              className="item me-auto my-auto ps-3 fs-6 fw-light"
            >
              {item.title}
            </h5>
            <FaTrash
              onClick={() => {
                removeItem(index);
              }}
              size={12}
              className="remove-btn"
            />
          </div>
        );
      })}
    </main>
  );
}
