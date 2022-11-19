import { Routes as RoutesReactRouter, Route } from "react-router-dom";

import { Home } from "../pages";

export function Routes() {
  return (
    <RoutesReactRouter>
      <Route path="/" element={<Home />} />
    </RoutesReactRouter>
  )
}