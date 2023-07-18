import { useAppSelector } from "@hooks/store";

export const Authenticate = (): boolean => {
  const { credentials } = useAppSelector((state) => state.auth);

  return !!credentials?.accessToken;
};
