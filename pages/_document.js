import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,800&display=swap" rel="stylesheet" />                   
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
