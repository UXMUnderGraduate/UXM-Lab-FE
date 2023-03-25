// 'use client';
import { useRef } from 'react';

interface MoveScroll {
  element: React.RefObject<HTMLElement>;
  onMoveToElement: () => void;
}

const useMoveScroll = (): MoveScroll => {
  const element = useRef<HTMLElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement };
};

export default useMoveScroll;
