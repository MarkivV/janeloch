import * as React from "react";

function LogoIcon(props: React.SVGProps<SVGSVGElement> | undefined) {
  return (
    <svg
      width="32px"
      height="32px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 913.26 913.33"
      className="fill-white"
      {...props}
    >
      <path d="M913.26,456.63c0,252.19-204.44,456.63-456.63,456.63-12.53,0-11.73.38-24-.62L764.19,264,776,242.49H212.31l-88,156.68H495.09L246.85,862.33C100.21,786.35,0,633.19,0,456.63,0,204.44,204.44,0,456.63,0S913.26,204.44,913.26,456.63Z" />
    </svg>
  );
}

export default LogoIcon;
