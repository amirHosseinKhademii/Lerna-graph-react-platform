import { FC, Fragment, memo } from "react";

export const Toolbar: FC<IToolbar> = memo(({ children }) => {
  return (
    <div className="w-full flex items-baseline justify-between border-b border-gray-300  pb-4">
      {typeof children !== "object" ? (
        <div slot="children">{children}</div>
      ) : (
        children.length > 0 && (
          <Fragment>
            <>{children.find((child) => child.props.slot === "start")}</>
            <>{children.find((child) => child.props.slot === "end")}</>
          </Fragment>
        )
      )}
    </div>
  );
});
