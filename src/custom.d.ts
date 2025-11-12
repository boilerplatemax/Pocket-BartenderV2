declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module 'react-animated-css' {
  import * as React from 'react';

  export interface AnimatedProps {
    animationIn?: string;
    animationOut?: string;
    animationInDuration?: number;
    animationOutDuration?: number;
    animationInDelay?: number;
    animationOutDelay?: number;
    isVisible?: boolean;
    animateOnMount?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class Animated extends React.Component<AnimatedProps> {}
}
