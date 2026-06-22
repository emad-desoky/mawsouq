/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source:
          "/%d9%83%d9%8a%d9%81-%d8%aa%d8%ae%d8%aa%d8%a7%d8%b1-%d8%a7%d9%84%d9%85%d8%b5%d9%85%d9%85-%d8%a7%d9%84%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a-%d8%a7%d9%84%d9%85%d9%86%d8%a7%d8%b3%d8%a8",
        destination:
          "/%d8%a7%d8%ae%d8%aa%d9%8a%d8%a7%d8%b1-%d9%85%d8%b5%d9%85%d9%85-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a",
        permanent: true,
      },
      {
        source:
          "/%d9%83%d9%8a%d9%81-%d8%aa%d8%ac%d8%af-%d9%85%d9%87%d9%86%d8%af%d8%b3-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a-%d8%af%d9%84%d9%8a%d9%84%d9%83-%d8%a7%d9%84%d8%b4%d8%a7%d9%85%d9%84",
        destination:
          "/%d8%af%d9%84%d9%8a%d9%84-%d9%85%d9%87%d9%86%d8%af%d8%b3-%d9%85%d8%b9%d9%85%d8%a7%d8%b1%d9%8a",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "mawsouq.com",
      },
    ],
  },
};

export default nextConfig;
