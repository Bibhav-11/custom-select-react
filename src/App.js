import { useState } from "react";
import Dropdown from "./Dropdown"

const options = [
  {
    label: "Africa",
    value: "Africa",
  },
  {
    label: "Asia",
    value: "Asia"
  },
  {
    label: "Europe",
    value: "Europe"
  },
  {
    label: "North America",
    value: "North America"
  },
  {
    label: "South America",
    value: "South America"
  },

]


function App() {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  return (
    <Dropdown open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} options={options} />
  );
}

export default App;
