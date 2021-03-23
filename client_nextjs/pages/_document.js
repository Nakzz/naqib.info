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
					<link
						rel="icon"
						type="image/png"
						href={require("../images/favicon.png")}
					></link>
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
