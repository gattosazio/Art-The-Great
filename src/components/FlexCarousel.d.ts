import type { CSSProperties } from "react";

export type FlexCarouselItem = {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  href?: string;
};

type FlexCarouselProps = {
  items?: FlexCarouselItem[];
  preset?: "liquid" | "ribbon" | "vortex" | "arch";
  intro?: "rise" | "bloom" | "spin" | "deal" | "none";
  cardHeight?: number;
  gap?: number;
  radius?: number;
  fit?: "natural" | "portrait" | "square" | "landscape";
  lensWidth?: number;
  lensHeight?: number;
  tilt?: number;
  roundness?: number;
  bend?: number;
  reach?: number;
  curl?: "twist" | "rise" | "fall";
  dispersion?: number;
  liquid?: number;
  followCursor?: boolean;
  squeeze?: number;
  focusOnClick?: boolean;
  autoplay?: boolean;
  interval?: number;
  captions?: boolean;
  captureWheel?: boolean;
  ariaLabel?: string;
  onChange?: (index: number, item: FlexCarouselItem) => void;
  onSelect?: (index: number, item: FlexCarouselItem) => void;
  className?: string;
  style?: CSSProperties;
};

declare function FlexCarousel(props: FlexCarouselProps): JSX.Element;

export default FlexCarousel;
