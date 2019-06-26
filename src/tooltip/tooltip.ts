import * as au from "../aurelia";

@au.customAttribute("md-tooltip")
@au.autoinject
export class MdTooltip {
	constructor(private element: Element) { }

	@au.bindable
	position: "top" | "right" | "bottom" | "left" = "bottom";

	@au.bindable
	delay: number = 50;

	@au.bindable
	enterDelay: number = 0;

	@au.bindable
	margin: number = 5;

	@au.bindable
	inDuration: number = 300;

	@au.bindable
	outDuration: number = 250;

	@au.bindable
	transitionMovement: number = 10;

	@au.bindable
	html: string = "";
	htmlChanged() {
		this.initTooltip();
	}

	@au.bindable
	text: string = "";
	textChanged() {
		this.html = this.text.replace(/<[^>]+>/g, "");
		this.initTooltip();
	}

	instance: M.Tooltip;

	attached() {
		this.initTooltip();
	}

	detached() {
		if (this.instance) {
			this.instance.destroy();
		}
	}

	initTooltip() {
		if (this.html) {
			this.instance = new M.Tooltip(
				this.element, {
					exitDelay: this.delay,
					html: this.html,
					position: this.position,
					enterDelay: this.enterDelay,
					margin: this.margin,
					inDuration: this.inDuration,
					outDuration: this.outDuration,
					transitionMovement: this.transitionMovement
				});
		}
		else if (this.instance) {
			this.instance.destroy();
		}
	}
}
