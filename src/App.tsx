import { useState } from "react";
import FilterDrawer from "./components/FilterDrawer/filterDrawer"
import Header from "./components/header/header"
import RoutesCompoenent from "./routes/routes"

function App() {
  const [draweropen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header onFilterClick={() => setDrawerOpen(!draweropen)} /> 
      <RoutesCompoenent />
      <FilterDrawer draweropen={draweropen} setDrawerOpen={setDrawerOpen} />
    </>
  )
}

export default App
