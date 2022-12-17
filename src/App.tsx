import "./Header.css";
import { ApplicationRouter } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <section>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ApplicationRouter />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </section>
    </>
  );
}

export default App;
