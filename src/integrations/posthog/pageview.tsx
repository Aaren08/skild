import { useRouterState } from "@tanstack/react-router";
import posthog from "posthog-js";
import { useEffect } from "react";

export default function PostHogPageView() {
	const location = useRouterState({ select: (s) => s.location });

	useEffect(() => {
		posthog.capture("$pageview", { $current_url: location.pathname });
	}, [location.pathname, location.search]);

	return null;
}
