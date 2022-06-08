import ReactLoading, { LoadingType } from "react-loading";

type Props = {
  color?: string;
  width?: number;
  height?: number;
  type?: LoadingType;
};

export const Loading = ({
  color = "#2191FB",
  width = 80,
  height = 80,
  type = "bars",
}: Props) => {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
};
