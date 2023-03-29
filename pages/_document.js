import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: ` !function(c,h,i,m,p)
          {
            ((m = c.createElement(h)),
            (p = c.getElementsByTagName(h)[0]),
            (m.async = 1),
            (m.src = i),
            p.parentNode.insertBefore(m, p))
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/3826bb06c6f1d1e3ad499b49b/0d66d0e9ce8027e3084d0fc83.js");`,
          }}
        ></Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicGroup',
              name: 'Vuzec Inc.',
              alternateName: 'Vuzec',
              url: 'https://www.vuzec.com/',
              logo: 'https://www.vuzec.com/_next/static/media/vuzec-white.3dd60741.svg',
              sameAs: [
                'https://www.instagram.com/vuzecmx/',
                'https://twitter.com/vuzecmx',
              ],
            }),
          }}
        />
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-02LVSJS844"
          async
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-02LVSJS844');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
