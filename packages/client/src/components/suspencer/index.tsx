import { Skeleton } from "components";
import { FC, memo, Suspense } from "react";

export const Suspencer: FC<ISuspencer> = memo(({ children }) => {
  return <Suspense fallback={<Skeleton />}>{children}</Suspense>;
});
