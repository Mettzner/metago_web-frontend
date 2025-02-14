"use client";

import { Button } from "@/app/_components/ui/button";
import { useContext, FormEvent, useState } from "react";
import { AuthContext } from "@/app/contexts/AuthContext";
import { toast } from "react-toastify";
import { Input } from "@/app/_components/ui/input";

const Home = () => {
  const { signIn } = useContext(AuthContext);

  const [USUARIO, setUsuario] = useState("");
  const [SENHA, setSenha] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (USUARIO === "" || SENHA === "") {
      toast.error("Preencha todos os campos");
      return;
    }

    setLoading(true);

    let data = {
      USUARIO,
      SENHA,
    };
    console.log(data);
    await signIn(data);

    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyan-50">
      {/* <div className="bg-cyan-800 h-[310px] w-1/4">
        <h1 className="text-3xl font-bold flex justify-center text-gray-800">
          Image
        </h1>
        <div className="p-8"></div>
      </div> */}
      <div className="bg-white w-1/4 p-8 rounded-xl shadow-md block">
        <h1 className="text-3xl font-bold flex justify-center text-gray-800">
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Usuário
            </label>
            <Input
              type="text"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={USUARIO}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Senha
            </label>
            <Input
              type="password"
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={SENHA}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full px-4 py-2 bg-cyan-800 text-white font-medium rounded hover:bg-cyan-700 focus:outline-none focus:ring-1"
          >
            Acessar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
