// import React from 'react';
// import {
//   Switch,
//   Route,
//   Redirect
// } from 'react-router-dom';
// import DogList from './DogList';
// import FilterDogDetails from './FilterDogDetails';

// function Routes({dogs}) {
//   return (
//     <Switch>
//       <Route exact path="/dogs">
//         <DogList dogs={dogs} />
//       </Route>
//       <Route path="/dogs/:name">
//         <FilterDogDetails dogs={dogs} />
//       </Route>
//       <Redirect to="/dogs" />
//     </Switch>
//   );
// }

// export default Routes;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";

function AppRoutes({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" replace />} />
    </Routes>
  );
}

export default AppRoutes;
