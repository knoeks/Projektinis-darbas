import { useLocation } from "react-router";

export const urlChecker = () => {
  const { search } = useLocation;
  return new URLSearchParams(search);
};
