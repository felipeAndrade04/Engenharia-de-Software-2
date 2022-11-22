import { Routes as RoutesReactRouter, Route } from "react-router-dom";

import { Game, Home, StartGame } from "../pages";

export function Routes() {
  return (
    <RoutesReactRouter>
      <Route path="/" element={<Home />} />
      <Route path="/iniciar-partida" element={<StartGame />} />
      <Route path="/partida" element={<Game />} />
    </RoutesReactRouter>
  );
}
