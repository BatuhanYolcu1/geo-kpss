import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactCompiler: true was forcing Turbopack which broke Vercel's middleware NFT tracing.
  // React Compiler still runs via babel-plugin-react-compiler (in devDependencies).
};

export default nextConfig;
