// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka5fXTRsUV6rMj64rSTVjsmVkaeQ5m2j0f/uw2mt4/bLQfWfSLI/OFF57SuM3jDk"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}