import { DropDown, DropDownOption } from "components";
import { ICPeoples } from "icons";
import { FC, memo } from "react";

export const PatientDropDown: FC<{ pathname?: string; push?: any }> = memo(
  ({ pathname, push }) => {
    return (
      <DropDown
        label="Patients"
        active={pathname.includes("patients")}
        icon={() => (
          <ICPeoples
            className="w-6 h-6 mx-3 text-gray-400 cursor-pointer "
            onClick={(e) => {
              e.stopPropagation();
              push("/admin/patients");
            }}
          />
        )}
      >
        <DropDownOption
          onClick={() => push("/admin/patients")}
          active={pathname === "/admin/patients"}
        >
          List
        </DropDownOption>
        <DropDownOption
          onClick={() => push("/admin/patients/add")}
          active={pathname === "/admin/patients/add"}
        >
          Add
        </DropDownOption>
      </DropDown>
    );
  }
);
