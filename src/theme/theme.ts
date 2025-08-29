export const theme = {
	colors: {
		primary: '#2E6BFF',
		primaryDark: '#1E48B5',
		accent: '#00C2A8',
		text: '#111827',
		subtext: '#6B7280',
		background: '#FFFFFF',
		muted: '#E5E7EB',
	},
	spacing: {
		xs: 4,
		sm: 8,
		md: 16,
		lg: 24,
		xl: 32,
	},
	typography: {
		title: 24,
		subtitle: 18,
		body: 16,
		caption: 14,
	},
} as const;

export type AppTheme = typeof theme;

