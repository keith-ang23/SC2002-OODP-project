/** @type {import('next').NextConfig} */
const nextConfig = {
    //  async headers() {
    //     return [
    //         {
    //             // matching all API routes
    //             source: "/:path*",
    //             headers: [
    //                 { key: "Access-Control-Allow-Credentials", value: "true" },
    //                 { key: "Access-Control-Allow-Origin", value: "http://localhost:3000" }, // replace this your actual origin
    //                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
    //                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
    //             ]
    //         }
    //     ]
    // },

    images: {
        domains: ['localhost', 'www.nea.gov.sg', 'images.unsplash.com', 'lh3.googleusercontent.com', 'maps.googleapis.com'],
    }
}

module.exports = nextConfig