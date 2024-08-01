/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['your-image-domain.com'],
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en',
    },
    experimental: {
        optimizeFonts: true,
        scrollRestoration: true,
    },
};

module.exports = nextConfig;
