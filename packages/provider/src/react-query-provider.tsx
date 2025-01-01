import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/**
 * Initializes a new instance of QueryClient with default options and mutation cache.
 *
 * The `QueryClient` is configured with the following default options:
 * - `retry`: Disabled (set to `false`).
 * - `refetchOnWindowFocus`: Enabled (set to `true`).
 * - `refetchOnReconnect`: Always refetch on reconnect (set to `"always"`).
 * - `staleTime`: Queries will never go stale (set to `Number.POSITIVE_INFINITY`).
 *
 * Additionally, the `mutationCache` is configured to automatically invalidate queries
 * after mutations. This is achieved by using the `mutationKey` to efficiently invalidate
 * related queries. Mutations without a key will still invalidate all queries.
 * For example, using `mutationKey: ['issues']` will invalidate all queries related to 'issues'.
 * Mutations without a key will still invalidate all queries.
 *
 * For more details on automatic query invalidation after mutations, see:
 * https://tkdodo.eu/blog/automatic-query-invalidation-after-mutations#tie-it-to-the-mutationkey
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
      refetchOnReconnect: "always",
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
  mutationCache: new MutationCache({
    onSuccess: (_data, _variables, _context, mutation) => {
      queryClient.invalidateQueries({
        queryKey: mutation.options.mutationKey,
      });
    },
  }),
});

export function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} />
    </QueryClientProvider>
  );
}
