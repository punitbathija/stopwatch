// Understanding Context API
// 1)React.createContext
// 2)Context.Provider
// 3)Context.Consumer

// import React, { useState } from "react";

// const GrandChild = (props) => {
//   return (
//     <div>
//       <h3>GrandChild</h3>;
//       <Child brand={props.brand} />
//     </div>
//   );
// };

// const Child = (props) => {
//   return (
//     <div>
//       <h2>Child : {props.brand}</h2>
//     </div>
//   );
// };

// const App = () => {
//   const [brandName] = useState("Amazon");
//   return (
//     <div>
//       <h1>Parent</h1>
//       <GrandChild brand={brandName} />
//     </div>
//   );
// };

// export default App;
