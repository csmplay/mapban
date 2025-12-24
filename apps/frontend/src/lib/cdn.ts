// SPDX-FileCopyrightText: 2024, 2025 CyberSport Masters <git@csmpro.ru>
// SPDX-License-Identifier: AGPL-3.0-only

type RuntimeEnv = {
	NEXT_PUBLIC_CDN_BASE?: string;
	NEXT_PUBLIC_CDN_LOGO?: string;
};

const getRuntimeEnv = (): RuntimeEnv => {
	if (typeof window !== "undefined") {
		const env = (window as typeof window & { __RUNTIME_ENV__?: RuntimeEnv }).__RUNTIME_ENV__;
		if (env) {
			return env;
		}
	}
	return {};
};

const join = (p: string) => {
	const runtimeEnv = getRuntimeEnv();
	const BASE = (runtimeEnv.NEXT_PUBLIC_CDN_BASE || "https://cdn.example.com").replace(/\/+$/g, "");
	return `${BASE}/${p.replace(/^\/+/, "")}`;
};

export const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "").replace(/["«»]/g, "");

export const CDN = {
	get base() {
		const runtimeEnv = getRuntimeEnv();
		return (runtimeEnv.NEXT_PUBLIC_CDN_BASE || "https://cdn.example.com").replace(/\/+$/g, "");
	},
	raw: (path: string) => join(path),
	map: (game: string, name: string) => join(`mapban/${game}/maps/${slugify(name)}.jpg`),
	mode: (game: string, name: string) => join(`mapban/${game}/modes/${slugify(name)}.png`),
	logo: (game: string) => join(`mapban/${game}/logo.png`),
	coin: (result: number) => join(`mapban/coin_${result}.webm`),
	side: (game: string, side: string, variant?: "white" ) => {
		const base = `mapban/${game}/${side.toLowerCase()}`;
		return join(`${base}${variant === "white" ? "_white" : ""}.png`);
	},
	brand: () => {
		const runtimeEnv = getRuntimeEnv();
		const LOGO = (runtimeEnv.NEXT_PUBLIC_CDN_LOGO || "logo.svg").replace(/\/+$/g, "");
		return join(LOGO);
	},
} as const;

