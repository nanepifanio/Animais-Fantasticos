export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.showTooltip = this.showTooltip.bind(this);
    this.followMouse = this.followMouse.bind(this);
    this.closeToolTip = this.closeToolTip.bind(this);
  }

  showTooltip({ currentTarget }) {
    this.criarToolTipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.followMouse);
    currentTarget.addEventListener("mouseleave", this.closeToolTip);
  }

  followMouse({ pageX, pageY }) {
    this.toolTipBox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${pageX - 190}px`;
    } else {
      this.toolTipBox.style.left = `${pageX + 20}px`;
    }
  }

  closeToolTip({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.closeToolTip);
    currentTarget.removeEventListener("mousemove", this.followMouse);
  }

  criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  addTooltipListener() {
    this.tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", this.showTooltip);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipListener();
    }
    return this;
  }
}
