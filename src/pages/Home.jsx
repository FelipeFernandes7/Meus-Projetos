import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export function Home() {
const  Navigate =  useNavigate();
  return (
    <div>
      <main>
        <div className="title">
          <h1>Olá Dev's, Tudo Bem Com Vocês?</h1>
        </div>

        <div className="sub-title">
          <h2>Gostaria de falar um pouco sobre mim</h2>
        </div>
        <div className="parag">
          <p>
            Meu Nome é Luiz Felipe, tenho 18 Anos <br />
            entrei para o mundo da programação já fazem 2 anos. <br />
            Criei esta page pois será meu mural contendo todos meus projetos{" "}
            <br />
            espero que Gostem! XD
          </p>
        </div>

        <div className="btn">
          <Button onClick={()=>Navigate('/Mural')}>Get Started</Button>
        </div>
        
      </main>
    </div>
  );
}
