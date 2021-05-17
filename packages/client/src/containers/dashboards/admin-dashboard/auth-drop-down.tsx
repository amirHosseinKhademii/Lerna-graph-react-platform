import { DropDown, DropDownOption } from "components";
import { ICPerson } from "icons";
import { FC, memo } from "react";

export const AuthDropDown: FC<{ pathname?: string; push?: any }> = memo(
  ({ pathname, push }) => {
    return (
      <DropDown
        label="Sign in"
        active={pathname.includes("authentication")}
        icon={() => (
          <ICPerson
            className="w-6 h-6 mx-3 text-gray-400 cursor-pointer "
            onClick={(e) => {
              e.stopPropagation();
              push("/authentication/login");
            }}
          />
        )}
      >
        <DropDownOption
          onClick={() => push("/authentication/login")}
          active={pathname === "/authentication/login"}
        >
          Login
        </DropDownOption>
        <DropDownOption
          onClick={() => push("/authentication/password")}
          active={pathname === "/authentication/password"}
        >
          Password
        </DropDownOption>
      </DropDown>
    );
  }
);
