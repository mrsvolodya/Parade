interface ArrowRightIconProps {
  isActive?: boolean;
}

const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({
  isActive = false,
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.15833 13.825L10.975 10L7.15833 6.175L8.33333 5L13.3333 10L8.33333 15L7.15833 13.825Z"
        fill={isActive ? "#f4c93f" : "#fff"}
      />
    </svg>
  );
};

export default ArrowRightIcon;
