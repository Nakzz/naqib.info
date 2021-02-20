import "../assets/styles/bootstrap.min.css";
import "../assets/styles/icofont.min.css";
import "../assets/styles/style.scss";
import "../assets/styles/responsive.scss";
import "../assets/styles/animate.min.css";
import '../node_modules/react-modal-video/scss/modal-video.scss';

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initializeApollo, useApollo } from "../utils/apolloClient";
import { ApolloProvider } from "@apollo/client";

import { initStore } from "../store/reducers/index";
import { DefaultSeo } from "next-seo";
import Loader from "../components/shared/Loader";
import GoTop from "../components/shared/GoTop";

export default withRedux(initStore)(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			const pageProps = Component.getInitialProps
				? await Component.getInitialProps(ctx)
				: {};

			if (Object.keys(pageProps).length > 0) {
				// return pageProps only when its present
				return { pageProps };
			}
			return {};
		}

		render() {
			const { Component, pageProps, store } = this.props;
			const apolloClient = initializeApollo();

			return (
				<ApolloProvider client={apolloClient}>
					<DefaultSeo
						title="Ajmain Naqib | Personal Website"
						description="Ajmain Naqib's portfolio website. This has been built with React, Next.js, Express.js, and ES6+" // TODO: change this since this will be shown on google search
						openGraph={{
							type: "website",
							locale: "en_IE",
							url: "https://naqib.info",
							site_name: "Ajmain Naqib | Personal Website",
						}}
						additionalMetaTags={[
							{
								property: "viewport",
								content:
									"width=device-width, initial-scale=1, shrink-to-fit=no",
							},
						]}
					/>
					<Preloader>
						<Provider store={store}>
							<Component {...pageProps} />
						</Provider>
						<GoTop scrollStepInPx="50" delayInMs="16.66" />
						<Placeholder>
							<Loader />
						</Placeholder>
					</Preloader>
				</ApolloProvider>
			);
		}
	}
);
