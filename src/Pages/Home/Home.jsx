import "./Home.css";
import Exluir from "../../assets/excluir.svg";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const userFromApi = await api.get("/usuarios");

    setUsers(userFromApi.data);
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
    getUsers();
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuário</h1>
        <input placeholder="Nome" name="Nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="Idade" type="number" ref={inputAge} />
        <input placeholder="Email" name="Email" type="text" ref={inputEmail} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>

          <button className="delete" onClick={() => deleteUsers(user.id)}>
            <img src={Exluir} alt="lixeira" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;

