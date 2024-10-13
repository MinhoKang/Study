export type UseQueryResult<TData = unknown, TError = unknown> = {
  data: TData | undefined;
  error: TError | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isIdle: boolean;
  status: "loading" | "error" | "success" | "idle";
};
