import React from "react";
import ShopItem from "./shopItem";
import Header from "./header";
import Total from "./Total";
import { useState } from "react";
import { useEffect } from "react";

export default function ShopingList() {
  //* useState section

  const [item, setItem] = useState({
    completed: false,
    title: "",
    quantity: "",
  });
  const [list, setList] = useState(() => {
    let LS = JSON.parse(localStorage.getItem("list"));
    if (LS) return LS;
    else return [];
  });
  const [total, setTotal] = useState(0);
  //* useEffect section

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    let total = 0;
    list.forEach((item) => {
      total += Number(item.quantity);
    });
    setTotal(total);
  }, [list]);
  //* functions section

  function setTitle(e) {
    setItem({
      ...item,
      title: e.target.value,
    });
  }
  function setQuantity(e) {
    setItem({
      ...item,
      quantity: e.target.value,
    });
  }
  function showItemClickHandler() {
    if (item.quantity > 0 && item.title) {
      setList([
        ...list,
        {
          quantity: item.quantity,
          title: item.title,
          completed: false,
        },
      ]);
    }
  }
  function iBoughtItem(i) {
    const newList = [...list];
    newList[i].completed = !list[i].completed;
    setList(newList);
  }
  function enterKey(e) {
    if (e.key === "Enter") {
      showItemClickHandler();
    }
  }
  //* JSX section

  return (
    <div className="container shopping-wrapper">
      <Header
        showItemClickHandler={showItemClickHandler}
        setTitle={setTitle}
        setQuantity={setQuantity}
      />
      <ShopItem list={list} setList={setList} iBoughtItem={iBoughtItem} />
      <Total total={total} />
      {(window.onkeydown = enterKey)}
    </div>
  );
}
