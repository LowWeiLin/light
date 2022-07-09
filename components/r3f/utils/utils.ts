import { useRef } from "react";

import { ThreeEvent } from "@react-three/fiber";

/**
 * Wraps an onClick handler that gets cancelled if the mouse was dragged too far away.
 */
export const useClickNoDrag = (
  onClick: (_: ThreeEvent<MouseEvent>) => void,
  onPointerDown?: (_: ThreeEvent<PointerEvent>) => void
) => {
  // track mousedown position to skip click handlers on drags
  const mouseDownRef = useRef([0, 0]);
  const handlePointerDownWrapped = (event: ThreeEvent<PointerEvent>) => {
    mouseDownRef.current[0] = event.nativeEvent.clientX;
    mouseDownRef.current[1] = event.nativeEvent.clientY;
    if (onPointerDown) {
      onPointerDown(event);
    }
  };

  const handleClickNoDrag = (event: ThreeEvent<MouseEvent>) => {
    const { clientX, clientY } = event.nativeEvent;
    const dx = mouseDownRef.current[0] - clientX;
    const dy = mouseDownRef.current[1] - clientY;
    const downDistance = Math.sqrt(dx ** 2 + dy ** 2);
    if (downDistance > 5) {
      // skip click if we dragged more than 5px distance
      event.stopPropagation();
      return;
    }
    onClick(event);
    event.stopPropagation();
  };

  return { handlePointerDownWrapped, handleClickNoDrag };
};

export default { useClickNoDrag };
