import { Drawer } from "components";
import { useUi } from "hooks";

export const AdminDashboard = () => {
  const { uiState } = useUi();
  const { open } = uiState.drawer;

  return <Drawer open={open}></Drawer>;
};
