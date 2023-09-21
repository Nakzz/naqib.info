import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  // 	const initialProps = Document.getInitialProps
  // 		? await Document.getInitialProps(ctx)
  // 		: {};

  // 	// console.log(initialProps);

  // 	if (Object.keys(initialProps).length > 0) {
  // 		return { ...initialProps };
  // 	} else {
  // 		return {};
  // 	}
  // } //TODO: Change favicon

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href={"images/favicon.png"}></link>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
