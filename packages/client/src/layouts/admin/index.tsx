import { AdminDashboard, AdminHeader } from "containers";
import { classNames } from "utils";

export const AdminLayout = ({ children }) => {
  return (
    <div className="fixed inset-0 h-full w-full overflow-y-auto overflow-x-hidden bg-gradient-to-b from-blue-gray-800 ">
      <AdminDashboard />
      <AdminHeader />
      <div
        className={classNames(
          "w-full trans col-center my-2 md:my-10 px-2 md:px-20"
        )}
      >
        {children}
      </div>
    </div>
  );
};
