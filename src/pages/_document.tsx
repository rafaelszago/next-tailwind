import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@/config/stitches.config'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            />
          </>
        )
      }
    } finally {
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Next + tailwind starter project" />
          <meta name="robots" content="noindex"></meta>
          <meta name="googlebot" content="noindex"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
