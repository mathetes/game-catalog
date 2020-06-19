import React from "react";
import Heading from "../layout/heading/Heading";
import GamesOverview from "../games/gameOverview/GamesOverview";

function Home() {
  return (
    <>
      <Heading title="Игры" />
      <GamesOverview />
    </>
  );
}

export default Home;
