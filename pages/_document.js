import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' style={{ scrollBehavior: 'smooth' }}>
        <Head />
        <body style={{scrollBehavior:'smooth'}} >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument