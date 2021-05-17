import { ICLoading } from "icons";

const Skeleton = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex justify-center items-center pt-64">
      <ICLoading className="w-20 h-20 text-gray-400" />
    </div>
  );
};
export { Skeleton };
