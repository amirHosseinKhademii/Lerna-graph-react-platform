import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UiProvider } from "provider";
import { Router } from "./router";

const Boot = () => (
  <QueryClientProvider client={new QueryClient()}>
    <UiProvider>
      <Router />
    </UiProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export { Boot };
