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
  const [edit, setEdit] = useState<boolean>(false);

  function Update(item: Item) {
    setEdit(true);

    setCurrentItem(item);
  }

  function Remove(id: number) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  function Process() {
    if (!edit) {
      let id = 1;
      if (items.length > 0) {
        const lastIndex: Item = items[items.length - 1];
        id = lastIndex.id + 1;
      }
      items.push({ ...currentItem, id });
      setCurrentItem({ id: 0, name: "", quantity: 1 });
    } else {
      const updatedItems = [...items];
      const index = items.findIndex((i) => i.id === currentItem.id);
      updatedItems[index] = { ...currentItem };
      setItems([...updatedItems]);
      setCurrentItem({ id: 0, name: "", quantity: 0 });
      setEdit(false);
    }
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
      <button onClick={() => Process()}>
        {edit && "salvar"} {!edit && "Adicionar"}
      </button>
      <br /> <br />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button style={{ marginLeft: 10 }} onClick={() => Update(item)}>
              Editar
            </button>
            <button style={{ marginLeft: 10 }} onClick={() => Remove(item.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
