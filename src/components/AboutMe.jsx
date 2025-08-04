import { supabase } from "../data/supabaseClient";
import "../StylesPage/aboutMe.css";
import { useEffect, useState } from "react";
import InformationCards from "./InformationCards";
export function AboutMe() {
  const [information, setInformation] = useState([]);

  useEffect(() => {
    const fetchInformation = async () => {
      const { data, error } = await supabase.from("aboutMe").select("*");

      if (error) {
        console.error("Error al cargar informacion:", error);
      } else {
        setInformation(data);
        console.log(data);
      }
    };

    fetchInformation();
  }, []);

  return (
    <div id="aboutMe">
      {information.map((e, i) => {
        return (
          <div key={i} className="about-container">
            <div className="description">
              <img src="https://robohash.org/45.164.64.84.png" alt="userImg" />
              <p className="information"> {e.information}</p>
            </div>

            <div className="content">
              <div>
                <h4>Habilidades técnicas </h4>
                <InformationCards label={"Lenguajes"} data={e.lenguajes} />
                <InformationCards label={"Web"} data={e.web} />
                <InformationCards label={"Frameworks"} data={e.frameworks} />
                <InformationCards label={"Base de Datos"} data={e.baseDatos} />
                <InformationCards label={"Herramientas"} data={e.tools} />
                <InformationCards label={"Paradigmas"} data={e.paradigmas} />
              </div>
              <div>
                <h4>Educación</h4>
                {e.education.map((school, j) => {
                  const campos = school.split(",");
                  return (
                    <div key={j} className="card-school">
                      {campos.map((c, k) => {
                        return (
                          <span key={k} className="content-school">
                            {c}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div>
                <h4>Experiencia </h4>
                {e.experiencie.map((ex, j) => {
                  const campos = ex.split(",");
                  return (
                    <div key={j} className="card-experiencie">
                      {campos.map((c, k) => {
                        return (
                          <span key={k} className="content-experiencie">
                            {c}
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href={e.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link"
            >
              <span className="btn-CV">Descargar CV</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default AboutMe;
