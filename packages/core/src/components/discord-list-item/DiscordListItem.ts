import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DiscordComponentsError } from '../../util.js';

@customElement('discord-list-item')
export class DiscordListItem extends LitElement {
	public static override styles = css`
		:host > li {
			white-space: break-spaces;
			margin-bottom: 4px;
		}
	`;

	public checkParentElement() {
		if (
			this.parentElement?.tagName.toLowerCase() !== 'discord-unordered-list' &&
			this.parentElement?.tagName.toLowerCase() !== 'discord-ordered-list'
		) {
			throw new DiscordComponentsError(
				'All <discord-list-item> components must be direct children of <discord-unordered-list> or <discord-ordered-list>.'
			);
		}
	}

	protected override render() {
		this.checkParentElement();

		return html`<!-- display: inline -->
			<li
				><span
					><span><slot></slot></span></span
			></li>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'discord-list-item': DiscordListItem;
	}
}
