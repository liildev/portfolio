interface ComponentWithLayout extends NextPage {
  Layout?: FunctionComponent;
}

interface Props {
  title?: string;
  image: string;
  description: string;
}

interface ISeo {
  title?: string;
  image: string;
  description: string;
}
