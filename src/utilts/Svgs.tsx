import { FC } from "react";

interface Props {
  src: string;
  color?: string;
  height?: string;
  width?: string;
}

interface SVGDictionary {
  [key: string]: (color: string, height: string, width: string) => JSX.Element;
}

const SVGS: SVGDictionary = {

}


const SVGComponent: FC<Props> = ({ src, color, height, width }) => {
  const svgToRender = SVGS[src];
  if (!svgToRender) {
    return <div></div>;
  }

  return (
    <>{svgToRender(color || "#000000", height || "4px", width || "4px")}</>
  );
};

export default SVGComponent;