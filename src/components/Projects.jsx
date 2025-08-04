import { useState, useEffect } from "react";
import { supabase } from "../data/supabaseClient";
import * as SiIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../StylesPage/projects.css";
import { Carrusel } from "./Carrusel";
function Projects() {
  const [projectsData, setProjectsData] = useState([]);
  const [iconsData, setIconsData] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from("projects").select("*");

      if (error) {
        console.error("Error al leer proyectos:", error);
      } else {
        setProjectsData(data);
        console.log("Proyectos:", data);
      }
    };

    const fetchIcons = async () => {
      const { data, error } = await supabase.from("tecnologys").select("*");

      if (error) {
        console.error("Error al leer los iconos:", error);
      } else {
        setIconsData(data);
        console.log("Iconos:", data);
      }
    };

    fetchProjects();
    fetchIcons();
  }, []);

  const libraries = {
    si: SiIcons,
    fa: FaIcons,
  };

  if (projectsData.length === 1) {
    return (
      <div id="projects">
        {projectsData.map((p, i) => {
          return (
            <div key={i} className="card">
              <h3 className="title">{p.title}</h3>
              <div className="mainCard">
                <Carrusel imgs={p.img} />

                <div className="descriptionContainer">
                  <div className="iconContainer">
                    <span className="subtitle">Lenguajes: </span>
                    <span className="content">{p.lenguaje}</span>
                  </div>
                  <div className="iconContainer">
                    <span className="subtitle">Frameworks/Librerias: </span>
                    <span className="content">{p.framework}</span>
                  </div>

                  <div>
                    <span className="subtitle">Arquitecturas: </span>
                    <span className="content">{p.arquitectura}</span>
                  </div>
                  <div>
                    <span className="subtitle">Patrones de diseño:</span>
                    <div className="contenedorPatrones">
                      {p.patrones.map((e, j) => {
                        return (
                          <span className="patrones" key={j}>
                            {e}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <p className="description">{p.description}</p>

              <div
                className="btnCodigo"
                onClick={() => {
                  window.open(p.url, "_blank");
                }}
              >
                <FaGithub />
                <span>Explorar Código</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div id="projects">
        {projectsData.map((p, j) => {
          return (
            <div key={j} className="card">
              <span>{p.title}</span>
              <br />
              <span>{p.description}</span>
              <img src={p.img} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Projects;
