export default function manifest() {
    return {
        name: 'Angela Fashion',
      
        short_name: 'Angela',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: './favicon/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: './favicon/android-chrome-256x256.png',
                sizes: '256x256',
                type: 'image/png'
            }
        ],
    };
}