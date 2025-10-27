import { configureStore, Middleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import themeReducer, {
  loadInitialThemeState,
} from "@/lib/redux-features/slices/theme-slice";
// RTK Query API slice

// Type guard to check if action has a type property
const isActionWithType = (action: unknown): action is { type: string } => {
  return (
    typeof action === "object" &&
    action !== null &&
    "type" in action &&
    typeof (action as { type: unknown }).type === "string"
  );
};

// Persist to localStorage middleware (throttled)
const localStorageMiddleware = (): Middleware => {
  let timeoutId: NodeJS.Timeout | null = null;

  return (store) => (next) => (action) => {
    const result = next(action);

    // Only persist certain actions to avoid excessive localStorage writes
    const shouldPersist =
      isActionWithType(action) &&
      (action.type.includes("theme/") || action.type.includes("ui/"));

    if (shouldPersist && typeof window !== "undefined") {
      // Throttle localStorage writes
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        try {
          const state = store.getState();
          const persistedState = {
            theme: state.theme,
          };
          localStorage.setItem("redux-state", JSON.stringify(persistedState));
          window.dispatchEvent(new Event("redux-updated"));
        } catch {
          // Silently fail if localStorage is not available
        }
      }, 500); // Throttle to 500ms
    }

    return result;
  };
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  preloadedState: {
    theme: loadInitialThemeState(),
  },
  middleware: (getDefaultMiddleware) =>
    // add RTK Query middleware first (recommended), then your custom middlewares
    getDefaultMiddleware().concat(localStorageMiddleware()),
});

// enable useful behaviors for RTK Query (optional but recommended)
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
