"use client";

import { useState } from "react";

interface FormData {
  email: string;
  senha: string;
}
function LoginPage() {
  const inside = { email: "contato@tiago.com", senha: "1234" };

  const [formData, setFormData] = useState<FormData>({
    email: "",
    senha: "",
  });

  function VerifyLogin() {
    if (inside.email === formData.email && inside.senha === formData.senha) {
      alert("login efetuado");
    } else {
      alert("usuário ou senha incorretos ");
    }
  }
  return (
    <>
      <input
        type="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Digite o seu Email"
      />
      <br />
      <input
        type="senha"
        onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
        placeholder="Digite o sua Senha"
      />
      <br />
      <button onClick={() => VerifyLogin()}>Login</button>
    </>
  );
}

export default LoginPage;
