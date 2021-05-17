import { useCallback, useState } from "react";

export const useTableCell = () => {
  const [checkList, setCheckList] = useState([]);

  const handleCheck = useCallback(
    (id) => (e) => {
      e.stopPropagation();
      const exist = id && checkList.find((item) => item === id);
      if (exist) setCheckList((prev) => prev.filter((item) => item !== id));
      else setCheckList((prev) => [...prev, id]);
    },
    [checkList]
  );
  return {
    checkList,
    handleCheck,
  };
};
