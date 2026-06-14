import { getApp, getApps, initializeApp } from "firebase/app";
import { getDataConnect } from "firebase/data-connect";
import { connectorConfig } from "#/dataconnect-generated";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Validate required environment variables early to fail fast on misconfiguration
if (
	!import.meta.env.VITE_FIREBASE_API_KEY ||
	!import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
	!import.meta.env.VITE_FIREBASE_PROJECT_ID ||
	!import.meta.env.VITE_FIREBASE_APP_ID
) {
	throw new Error(
		"Missing required Firebase environment variables. Please set VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, and VITE_FIREBASE_APP_ID",
	);
}

export const firebaseApp = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();

export const dataConnect = getDataConnect(firebaseApp, connectorConfig);
