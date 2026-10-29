import type { CSSProperties } from "react";

type GhostCursorProps = {
  color?: string;
  brightness?: number;
  size?: number;
  trailLength?: number;
  inertia?: number;
  turbulence?: number;
  drift?: number;
  detail?: number;
  grainIntensity?: number;
  bloomStrength?: number;
  bloomRadius?: number;
  bloomThreshold?: number;
  edgeIntensity?: number;
  clickPuff?: boolean;
  intro?: boolean;
  theme?: "dark" | "light";
  mixBlendMode?: CSSProperties["mixBlendMode"];
  fadeDelayMs?: number;
  fadeDurationMs?: number;
  maxDevicePixelRatio?: number;
  targetPixels?: number;
  zIndex?: number;
  className?: string;
  style?: CSSProperties;
};

declare function GhostCursor(props?: GhostCursorProps): JSX.Element;

export default GhostCursor;
