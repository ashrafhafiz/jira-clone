// This is a custom React hook named `useCurrent`.
// It uses `useQuery` from `@tanstack/react-query`
// to fetch data from an API endpoint (`client.api.auth.current`)
// and returns the query result.

// In essence, it's a reusable function that handles
// fetching and caching data from the "current" API endpoint,
// and provides the result to components that use this hook.

import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useCurrent = () => {
  const query = useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const response = await client.api.auth.current["$get"]();

      if (!response.ok) {
        return null;
      }

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
