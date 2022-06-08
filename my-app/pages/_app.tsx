import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/globals.css";

import MSidebar from "../components/molecules/MSidebar";
import OLayout from "../components/organisms/OLayout";
import OContainer from "../components/organisms/OContainer";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <OLayout>
        <MSidebar />
        <OContainer>
          <Component {...pageProps} />
        </OContainer>
      </OLayout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
