import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

import MSidebar from "../components/molecules/MSidebar";
import OLayout from "../components/organisms/OLayout";
import OContainer from "../components/organisms/OContainer";
import { ContextProvider } from "../context";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <OLayout>
          <MSidebar />
          <OContainer>
            <Component {...pageProps} />
          </OContainer>
        </OLayout>
      </ContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
