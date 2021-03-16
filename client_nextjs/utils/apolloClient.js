// lib/apolloClient.js
import { useMemo } from "react";
const https = require("https");

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient;

function createApolloClient() {
	var url =
		process.env.NODE_ENV === "docker_production"
			? "https://172.17.0.1:8010/admin/api"
			: "http://192.168.1.126:5000/admin/api";
	console.log(url);
	console.log("Client env: " + process.env.NODE_ENV);
	return new ApolloClient({
		ssrMode: typeof window === "undefined", // set to true for SSR
		link: new HttpLink({
			
			uri: url,
			// fetchOptions: {
			// 	agent: new https.Agent({ rejectUnauthorized: false }), //Since Keystone is in internal network, cert verification isn't needed
			// },
		}),
		cache: new InMemoryCache(),
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	// If your page has Next.js data fetching methods that use Apollo Client,
	// the initial state gets hydrated here
	if (initialState) {
		// Get existing cache, loaded during client side data fetching
		const existingCache = _apolloClient.extract();

		// Restore the cache using the data passed from
		// getStaticProps/getServerSideProps combined with the existing cached data
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === "undefined") return _apolloClient;

	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
