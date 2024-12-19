// tailwind config is required for editor support

import sharedConfig from "@through-motion/ui/tailwind.base";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "../../packages/ui/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
};

export default config;
