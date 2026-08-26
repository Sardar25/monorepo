/** @type {import('next').NextConfig} */
const path = require('path');
/**
 * In a monorepo the Next.js workspace may be considered outside the Git root.
 * Setting `turbopack.root` forces Turbopack to treat the repository root as the
 * workspace root, fixing the "ignored package.json" warning.
 */
const nextConfig = {
  turbopack: {
    // Resolve to the monorepo root (two levels up from the client folder)
    root: path.resolve(__dirname, '..'),
  },
};
module.exports = nextConfig;
