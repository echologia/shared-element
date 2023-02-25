interface IProps {
  color?: string;
}

const IconSearch = (props: IProps) => {
  return (
    <svg
      width={35}
      height={38}
      fill="none"
      viewBox="0 0 35 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m20 22 5 5M21 17.5a5.5 5.5 0 1 1-11.001-.001A5.5 5.5 0 0 1 21 17.5Z"
        stroke={props.color || "#000"}
        strokeMiterlimit={1}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export default IconSearch;
