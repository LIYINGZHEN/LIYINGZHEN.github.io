import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link href="https://rsms.me/inter/inter-ui.css" rel="stylesheet" />
          <meta content="width=device-width,initial-scale=1" name="viewport" />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="57x57"
            href="static/imgs/favicons/apple-touch-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="114x114"
            href="static/imgs/favicons/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="72x72"
            href="static/imgs/favicons/apple-touch-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="static/imgs/favicons/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="60x60"
            href="static/imgs/favicons/apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="120x120"
            href="static/imgs/favicons/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="76x76"
            href="static/imgs/favicons/apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="static/imgs/favicons/apple-touch-icon-152x152.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/imgs/favicons/favicon-196x196.png"
            sizes="196x196"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/imgs/favicons/favicon-96x96.png"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/imgs/favicons/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/imgs/favicons/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/imgs/favicons/favicon-128.png"
            sizes="128x128"
          />
          <meta name="application-name" content="&nbsp;" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta
            name="msapplication-square70x70logo"
            content="mstile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="mstile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="mstile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="mstile-310x310.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
