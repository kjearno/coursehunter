import icons from "./icons.svg";

interface Props {
  name: string;
  size: number;
  className?: string;
  color?: string;
}

export function Icon({ name, size = 20, className, color }: Props) {
  return (
    <svg width={size} height={size} className={className} fill={color}>
      <use xlinkHref={`${icons.src}#${name}`} />
    </svg>
  );
}
