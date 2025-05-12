/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
interface FormData {
  name: string;
  email: string;
  password: string;
}

import { useState } from "react";

function Example() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          value={formData.email}
        />
        <br />
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <br />
        <input
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          value={formData.password}
        />
      </div>
    </>
  );
}

export default Example;
