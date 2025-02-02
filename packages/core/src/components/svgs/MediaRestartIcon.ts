import { html, svg } from 'lit';
import { spread } from '../../spread.js';

const svgContent = svg`
	<path fill="currentColor" d="M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z"></path>
`;

export default function AudioVideoRestartIcon(props: Record<string, unknown> = {}) {
	return html`<svg ${spread(props)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${svgContent}</svg>`;
}
