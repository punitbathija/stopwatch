import React, { useState } from "react";
import ContextPkg from "./Context";

const Provider = (props) => {
  const [mission, SetMission] = useState({
    mname: "Mars Colonization",
    agent: "Elon Musk",
    accept: "Not Accepted",
  });
  return (
    <ContextPkg.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          SetMission({ ...mission, accept: "Accepted" });
        },
        declineMission: () => {
          SetMission({ ...mission, accept: "Not Accepted" });
        },
      }}
    >
      {props.children}
    </ContextPkg.Provider>
  );
};

export default Provider;
