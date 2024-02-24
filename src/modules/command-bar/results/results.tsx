import { KBarResults, useMatches } from "kbar";
import { GroupName } from "../styles";
import { Item } from "./item";

export const Results = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <GroupName>{item}</GroupName>
        ) : (
          <Item item={item} active={active} />
        )
      }
    />
  );
};
