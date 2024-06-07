import { ThemeVars } from '@mysten/dapp-kit';

// Dark theme based on the provided light theme
export const darkTheme: ThemeVars = {
	blurs: {
		modalOverlay: 'blur(0)',
	},
	backgroundColors: {
		primaryButton: '#2D3748',          // Darker background for buttons
		primaryButtonHover: '#4A5568',     // Slightly lighter on hover
		outlineButtonHover: '#4A5568',     // Match primary button hover
		modalOverlay: 'rgba(0, 0, 0, 0.8)', // Dark overlay
		modalPrimary: '#1A202C',           // Dark primary modal background
		modalSecondary: '#2D3748',         // Slightly lighter secondary background
		iconButton: 'transparent',
		iconButtonHover: '#4A5568',        // Match button hover
		dropdownMenu: '#2D3748',           // Dark dropdown menu
		dropdownMenuSeparator: '#4A5568',  // Separator with contrast
		walletItemSelected: '#2D3748',     // Match dropdown menu
		walletItemHover: '#4A5568',        // Match button hover
	},
	borderColors: {
		outlineButton: '#718096',          // Lighter border for contrast
	},
	colors: {
		primaryButton: '#E2E8F0',          // Light text on dark button
		outlineButton: '#E2E8F0',          // Match primary button text
		iconButton: '#E2E8F0',             // Light icon color
		body: '#E2E8F0',                   // Light body text
		bodyMuted: '#A0AEC0',              // Muted light text
		bodyDanger: '#F56565',             // Light red for danger
	},
	radii: {
		small: '6px',
		medium: '8px',
		large: '12px',
		xlarge: '16px',
	},
	shadows: {
		primaryButton: '0px 4px 12px rgba(0, 0, 0, 0.5)', // Darker shadow for buttons
		walletItemSelected: '0px 2px 6px rgba(0, 0, 0, 0.3)', // Darker shadow for wallet item
	},
	fontWeights: {
		normal: '400',
		medium: '500',
		bold: '600',
	},
	fontSizes: {
		small: '14px',
		medium: '16px',
		large: '18px',
		xlarge: '20px',
	},
	typography: {
		fontFamily:
			'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		fontStyle: 'normal',
		lineHeight: '1.3',
		letterSpacing: '1',
	},
};
