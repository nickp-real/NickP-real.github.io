export type Route = { [path: string]: string };

export const routes: Route = {
  "/": "Home",
  "/blogs": "Blogs",
  "/resume": "Resume",
} as const;
