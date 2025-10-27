"use client";

import { store } from "@/lib/redux/store";
import { Provider } from "react-redux";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export function ProvidersPack({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
