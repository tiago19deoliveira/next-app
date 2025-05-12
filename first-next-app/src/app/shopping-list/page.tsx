/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

type Item = {
  id: number;
  name: string;
  quantity: number;
};

function ShoppingList() {
  const [items, setItems] = useState<Item[]>([]);
  const [currentItem, setCurrentItem] = useState<Item>({
    id: 0,
    name: "",
    quantity: 1,
  });

  function Adicionar() {
    let id = 1;
    if (items.length > 0) {
      const lastIndex: Item = items[items.length - 1];
      id = lastIndex.id + 1;
    }
    items.push({ ...currentItem, id });
  }

  return (
    <div>
      <h1>List Shop</h1>
      <br />
      <input
        type="text"
        value={currentItem.name}
        onChange={(e) =>
          setCurrentItem({ ...currentItem, name: e.target.value })
        }
        placeholder="Digite o nome do produto"
      />
      <input
        type="number"
        min={1}
        value={currentItem.quantity}
        onChange={(e) =>
          setCurrentItem({ ...currentItem, quantity: Number(e.target.value) })
        }
      />

      <button onClick={() => Adicionar()}>adicionar</button>
    </div>
  );
}
export default ShoppingList;
