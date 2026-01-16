import type { APIRoute } from "astro";
import { SITE } from "@consts";

const manifest = {
  name: SITE.NAME,
  short_name: "Vijay",
  description:
    "Portfolio of Vijay Tembugade, fullstack developer specializing in modern web applications.",
  lang: "en",
  start_url: "/?utm_source=homescreen",
  scope: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  icons: [
    {
      src: "/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
      purpose: "any",
    },
  ],
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
    },
  });
