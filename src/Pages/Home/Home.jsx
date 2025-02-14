// import "./Home.css";
// import Exluir from "../../assets/excluir.svg";
// import api from "../../services/api";
// import { useEffect, useState, useRef } from "react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Home() {
//   const [users, setUsers] = useState([]);
//   const inputName = useRef();
//   const inputAge = useRef();
//   const inputEmail = useRef();

//   async function getUsers() {
//     const userFromApi = await api.get("/usuarios");

//     setUsers(userFromApi.data);
//   }

//   async function createUsers() {
//     await api.post("/usuarios", {
//       name: inputName.current.value,
//       age: inputAge.current.value,
//       email: inputEmail.current.value,
//     });
//     getUsers();
//   }

//   async function deleteUsers(id) {
//     await api.delete(`/usuarios/${id}`);
//     getUsers();
//   }

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div className="container">
//       <form>
//         <h1>Cadastro de usuário</h1>
//         <input placeholder="Nome" name="Nome" type="text" ref={inputName} />
//         <input placeholder="Idade" name="Idade" type="number" ref={inputAge} />
//         <input placeholder="Email" name="Email" type="text" ref={inputEmail} />
//         <button type="button" onClick={createUsers}>
//           Cadastrar
//         </button>
//       </form>

//       {users.map((user) => (
//         <div key={user.id} className="card">
//           <div>
//             <p>
//               Nome: <span>{user.name}</span>
//             </p>
//             <p>
//               Idade: <span>{user.age}</span>
//             </p>
//             <p>
//               Email: <span>{user.email}</span>
//             </p>
//           </div>

//           <button className="delete" onClick={() => deleteUsers(user.id)}>
//             <img src={Exluir} alt="lixeira" />
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;

//////////////////////////////////////////////

// import "./Home.css";
// import Exluir from "../../assets/excluir.svg";
// import api from "../../services/api";
// import { useEffect, useState, useRef } from "react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Home() {
//   const [users, setUsers] = useState([]);
//   const inputName = useRef();
//   const inputAge = useRef();
//   const inputEmail = useRef();

//   async function getUsers() {
//     const userFromApi = await api.get("/usuarios");
//     setUsers(userFromApi.data);
//   }

//   async function createUsers() {
//     try {
//       await api.post("/usuarios", {
//         name: inputName.current.value,
//         age: inputAge.current.value,
//         email: inputEmail.current.value,
//       });
//       toast.success("Usuário criado com sucesso!");
//       getUsers();
//     } catch (error) {
//       toast.error("Erro ao criar usuário.");
//     }
//   }

//   async function deleteUsers(id) {
//     try {
//       await api.delete(`/usuarios/${id}`);
//       toast.success("Usuário deletado com sucesso!");
//       getUsers();
//     } catch (error) {
//       toast.error("Erro ao deletar usuário.");
//     }
//   }

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div className="container">
//       <form>
//         <h1>Cadastro de usuário</h1>
//         <input placeholder="Nome" name="Nome" type="text" ref={inputName} />
//         <input placeholder="Idade" name="Idade" type="number" ref={inputAge} />
//         <input placeholder="Email" name="Email" type="text" ref={inputEmail} />
//         <button type="button" onClick={createUsers}>
//           Cadastrar
//         </button>
//       </form>
//       {users.map((user) => (
//         <div key={user.id} className="card">
//           <div>
//             <p>
//               Nome: <span>{user.name}</span>
//             </p>
//             <p>
//               Idade: <span>{user.age}</span>
//             </p>
//             <p>
//               Email: <span>{user.email}</span>
//             </p>
//           </div>

//           <button className="delete" onClick={() => deleteUsers(user.id)}>
//             <img src={Exluir} alt="lixeira" />
//           </button>
//         </div>
//       ))}
//       <ToastContainer />
//     </div>
//   );
// }

// export default Home;

import "./Home.css";
import Exluir from "../../assets/excluir.svg";
import api from "../../services/api";
import { useEffect, useState, useRef } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (
      !inputName.current.value.trim() ||
      !inputAge.current.value.trim() ||
      !inputEmail.current.value.trim()
    ) {
      toast.error("Todos os campos são obrigatórios!");
      return;
    }

    try {
      await api.post("/usuarios", {
        name: inputName.current.value.trim(),
        age: inputAge.current.value.trim(),
        email: inputEmail.current.value.trim(),
      });
      toast.success("Usuário criado com sucesso!");

      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";

      getUsers();
    } catch (error) {
      toast.error("Erro ao criar usuário.");
    }
  }

  async function deleteUsers(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      toast.success("Usuário deletado com sucesso!");
      getUsers();
    } catch (error) {
      toast.error("Erro ao deletar usuário.");
    }
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

      <ToastContainer />
    </div>
  );
}

export default Home;
