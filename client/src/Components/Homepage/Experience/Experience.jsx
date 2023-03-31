import React from "react";
import Row from "react-bootstrap/Row";
import CardHeader from "./CardHeader";
import Table from "react-bootstrap/Table";

import "./Experience.css";

const Experience = () => {
  const explist = [
    //Experience data list
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
    <section className="experience-container" id="experience">
      <div className="exp-content">
        {explist.map(
          (
            experience,
            index //Map experience data list to the table
          ) => (
            <div key={index}>
              <Table responsive>
                <tbody>
                  <tr>
                    {index % 2 === 0 ? (
                      <div>
                        {/* Pass data to CardHeader Component */}
                        <CardHeader experience={experience} />
                        {console.log(index % 2)}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </tr>
                  <tr>
                    {index % 2 === 1 ? (
                      <div>
                        {/* Pass data to CardHeader Component */}

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
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
