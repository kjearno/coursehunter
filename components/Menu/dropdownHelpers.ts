import type { Dispatch, MouseEvent, SetStateAction } from "react";

interface EventsProps {
  isMobile: boolean;
  setListActive: Dispatch<SetStateAction<boolean>>;
}

interface TargetClickProps extends EventsProps {
  event: MouseEvent;
}

export const getEvents = ({ isMobile, setListActive }: EventsProps) => {
  if (isMobile) {
    return;
  }

  return {
    onMouseEnter: () => setListActive(true),
    onMouseLeave: () => setListActive(false),
  };
};

export const handleTargetClick = ({
  event,
  isMobile,
  setListActive,
}: TargetClickProps) => {
  if (isMobile) {
    event.preventDefault();
    setListActive((prevValue) => !prevValue);
    return;
  }

  setListActive(false);
};
