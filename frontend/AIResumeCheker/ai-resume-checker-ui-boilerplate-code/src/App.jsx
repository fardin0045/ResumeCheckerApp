// import { RouterProvider } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ThemeProvider } from "@/context/ThemeContext";
// import { AuthProvider } from "@/context/AuthContext";
// import { UIProvider } from "@/context/UIContext";
// import { router } from "@/routes";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 1,
//       refetchOnWindowFocus: false,
//       staleTime: 30_000,
//     },
//   },
// });

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ThemeProvider>
//         <UIProvider>
//           <AuthProvider>
//             <RouterProvider router={router} />
//           </AuthProvider>
//         </UIProvider>
//       </ThemeProvider>
//     </QueryClientProvider>
//   );
// }

import { useCallback, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { UIProvider } from "@/context/UIContext";
import { router } from "@/routes";

import ProjectIntro from "@/components/ProjectIntro";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 30_000,
    },
  },
});

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;

    return sessionStorage.getItem("resuMate-intro-seen") !== "true";
  });

  const finishIntro = useCallback(() => {
    sessionStorage.setItem("resuMate-intro-seen", "true");

    // Intro শেষ হলে landing page-এ যাবে
    router.navigate("/", {
      replace: true,
    });

    setShowIntro(false);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UIProvider>
          <AuthProvider>
            <AnimatePresence mode="wait">
              {showIntro ? (
                <ProjectIntro
                  key="project-intro"
                  duration={20000}
                  onFinish={finishIntro}
                />
              ) : (
                <div key="main-app">
                  <RouterProvider router={router} />
                </div>
              )}
            </AnimatePresence>
          </AuthProvider>
        </UIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}