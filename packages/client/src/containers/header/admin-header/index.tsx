import { memo } from "react";
import { useHistory } from "react-router";
import { classNames } from "utils";
import { Button } from "components";
import { useUi } from "hooks";
import { ICClose, ICMenu, ICPerson } from "icons";

export const AdminHeader = memo(() => {
  const { push } = useHistory();
  const { toggleDrawer, uiState } = useUi();
  const { open } = uiState.drawer;

  return (
    <header className="row-between h-20 pr-4 md:pr-10 px-2 bg-gradient-to-b from-blue-gray-700">
      <div className="flex items-center md:hidden">
        {open ? (
          <Button icon onClick={(e) => toggleDrawer()}>
            <ICClose id="close" className="w-12 h-12 text-gray-300" />
          </Button>
        ) : (
          <Button icon onClick={() => toggleDrawer()}>
            <ICMenu id="menu" className="w-10 h-10 text-gray-300 " />
          </Button>
        )}
      </div>
      <div className="hidden md:block" />

      <Button icon onClick={() => push("/authentication/login")}>
        <img
          className="w-10 h-10 rounded-full"
          src="https://picsum.photos/200/300"
        />
      </Button>
    </header>
  );
});
