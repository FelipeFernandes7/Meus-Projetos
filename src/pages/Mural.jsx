import React from "react";
import folderMural from "../assets/img/folder.png";
import gitHub from '../assets/img/github.png'
import linkedIn from '../assets/img/linkedin.png'
import Insta from '../assets/img/instagram.png'
import "../styles/mural.css";
export function Mural() {
  return (
    <div className="pai">
      <h1>Meus Projetos</h1>
      <main className="main">
        <div className="container">
          <div className="projetos">
            <div className="projeto">
              <p className="p">Projeto Rô Modas</p>
              <a href="https://felipefernandes7.github.io/ProjetoRoModas/">
                <img className="img" src={folderMural} alt="Rô Modas" />
              </a>
            </div>

            <div className="projeto2">
              <p className="p">Projeto Vazio</p>
              <img className="img"  src={folderMural} alt="Vazio" />
            </div>
          </div>
        </div>
      </main>

      <footer>
      <div className="social-media">
         <a href="https://github.com/FelipeFernandes7"><img className="imgs" src={gitHub} alt="Github" /></a>
         <a href="https://www.linkedin.com/in/luiz-felipe-6a5a98215/"><img className="imgs" src={linkedIn} alt="Linkedin" /></a>
         <a href="https://www.instagram.com/felipe_fernandes7/"><img className="imgs" src={Insta} alt="Instagram" /></a>
          </div>
      </footer>
    </div>
  );
}
