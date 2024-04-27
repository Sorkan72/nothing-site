import { useMediaQuery } from "react-responsive";

export const useLargeScreen = () =>
  useMediaQuery({ query: "(min-width: 768px)" });

export const useMobileScreen = () =>
  useMediaQuery({ query: "(max-width: 767px)" });
