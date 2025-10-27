"use client";

import { Toaster } from "sonner";
import LoaderWrapper from "@/components/shared/LoaderWrapper";
import { ProvidersPack } from "@/components/theme/ProvidersPack";
import SyncManager from "@/components/theme/SyncManager";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ProvidersPack>
      <SyncManager />
      <LoaderWrapper>{children}</LoaderWrapper>
      <Toaster position="bottom-right" expand closeButton />
    </ProvidersPack>
  );
}
