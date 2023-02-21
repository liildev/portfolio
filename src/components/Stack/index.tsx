import { IStack } from "typings";
import { Fragment } from "react";

export default function Stack({ time, data, children }: IStack) {
  return (
    <Fragment>
      {children && (
        <div className="stack">
          <b className="stack-heading">{children}</b>

          <em>{time}</em>
        </div>
      )}

      <ul>
        {data.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}
