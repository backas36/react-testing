import { Button, SwipeableDrawer } from "@mui/material";
import { useState } from "react";

const Drawer = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <h2>Hello Drawer Component! </h2>
      <button className="btn btn-blue" onClick={() => setOpened(true)}>
        Open Drawer
      </button>
      <SwipeableDrawer
        anchor={"right"}
        open={opened}
        onClose={() => setOpened(false)}
        onOpen={() => setOpened(true)}
      >
        Hello Ashi!
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
