type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/api": undefined;
	"/api/generate": undefined
};

export type RouteId = "/" | "/api" | "/api/generate";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/api" | "/api/generate";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/favicon.svg";