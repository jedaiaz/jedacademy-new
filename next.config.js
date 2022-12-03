const nextTranslate = require("next-translate");

module.exports = {...nextTranslate({
    reactStrictMode: true,

    i18n: {
        locales: ["az"],
        locale: 'az',
        defaultLocale: "az",
    },
    images: {
        domains: ['admin.jedacademy.az'],   
    },
    async rewrites() {
      return [
        {
          source: '/admin.jedacademy.az/api/sendmail',
          destination: 'https://admin.jedacademy.az/api/sendmail',
        },
      ]
    },
   
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
      ) {
        return {
          '/': { page: '/' },
          '/haqqimizda': { page: '/haqqimizda' },
          '/elaqe': { page: '/elaqe' },
          '/kurslar': { page: '/kurslar' },
          '/kurslar/[slug]': {page: '/kurslar/[slug]'}
        }
    },
    
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
          ]

          
        }
      ]
    }
})
};
