import React from "react";
import { Tile } from "./ChiefGuests";
import styles from "../style";

function TeamSection({ team }) {
  return (
    <div className="mt-10 text-center">
      {team.map((division) => {
        return (
          <div className="mt-5">
            <h2 className={styles.heading2}>{division.heading}</h2>
            <div className="flex flex-wrap justify-center">
              {division.members.map((member) => {
                return (
                  <div className="ml-4 mr-4">
                    <Tile
                      name={member.name}
                      title={member.title}
                      desc={member.description}
                      img={member.img}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TeamSection;
