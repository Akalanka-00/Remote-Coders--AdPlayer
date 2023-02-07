import React from "react";
import Row from "react-bootstrap/Row";
import CardHeader from "./CardHeader";
import Table from "react-bootstrap/Table";

import "./Experience.css";

const Experience = () => {
  const explist = [
    {
      title: "Feature1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, maiores.",
    },

    {
      title: "Feature2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, maiores.",
    },

    {
      title: "Feature3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, maiores.",
    },

    {
      title: "Feature4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, maiores.",
    },

    {
      title: "Feature5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, maiores.",
    },
  ];

  return (
    <section className="experience-container">
      <div className="exp-content">
        {explist.map((experience, index) => (
          <div key={index}>
            <Table responsive>
              <tbody>
                <tr>
                  {index % 2 == 0 ? (
                    <div>
                      <CardHeader experience={experience} />
                      {console.log(index % 2)}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </tr>
                <tr>
                  {index % 2 == 1 ? (
                    <div>
                      <CardHeader experience={experience} />
                      {console.log("index % 2")}
                    </div>
                  ) : (
                    <div></div>
                  )}
                </tr>
              </tbody>
            </Table>

            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
