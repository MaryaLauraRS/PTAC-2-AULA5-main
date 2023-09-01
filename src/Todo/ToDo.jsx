import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [atividade,setAtividade] = useState("");
    const [lista,setLista] = useState ([]);
    const[id,setId] = useState (1);
    const salvar = (a) => {
        a.preventDefault();
        setLista([...lista, {
            id: id,
            atividade: atividade
        }]);
        setId(id+1);
    }
    
    return (
    <div>
    <Link to="/">home</Link>
    <br/>
    <center>    <h1>Lista de Atividades</h1></center><br/>
    <center>    <form onSubmit={salvar}>
        <input type="text" onChange={(e)=>{setAtividade(e.target.value)}}/>
        <button>ADD</button>
        </form>   </center>
            <div>
            <center>   {lista.map((atividade) => <p key={atividade.id}>  {atividade.atividade}</p>)} </center>
            </div>
           
        </div>
    );
}