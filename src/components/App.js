import React, { Fragment } from "react";
import Provider from "../Provider";
import Context from "../Context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <div className="text-center py-5 border border-danger rounded">
            <h3 className="text-dark">Agent Information</h3>
            <p className="text-info">Agent Name : {context.data.agent}</p>
            <p className="text-info">Mission Name : {context.data.mname}</p>
            <p className="text-danger">
              Mission Status : {context.data.accept}
            </p>
            <button
              className="btn btn-warning py-2"
              onClick={context.isMissionAccepted}
            >
              Accept Mission
            </button>
            <button
              className="btn btn-danger py-2 mx-2"
              onClick={context.declineMission}
            >
              Decline Mission
            </button>
          </div>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1 className="text-center text-warning">Sensitive Information</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
