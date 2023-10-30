const { createContentlayerPlugin } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withContentlayer = createContentlayerPlugin({});

module.exports = withContentlayer(nextConfig);
