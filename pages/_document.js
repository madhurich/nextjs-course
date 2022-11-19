import Document,  { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head/>
                <body>
                    {/* Main is reponsible to render the page components and react components */}
                    <Main/> 
                    <NextScript/>
                </body>
                
            </Html>
        )
    }
}

export default MyDocument