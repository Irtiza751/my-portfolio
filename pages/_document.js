import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  componentDidMount() {
    console.log(
      "%cMade with ❤︎️ by Muhammad Irtiza",
      "background:#3851ff;color:#fff;padding:0.5em 1em;line-height:1.8;"
    );
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <body className="antialiased text-gray-400 bg-gray-900 font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
