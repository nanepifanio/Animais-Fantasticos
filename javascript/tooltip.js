export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function showTooltip() {
    const toolTipBox = criarToolTipBox(this);

    followMouse.toolTipBox = toolTipBox;
    followMouse.element = this;
    this.addEventListener("mousemove", followMouse);
    closeToolTip.toolTipBox = toolTipBox;
    closeToolTip.element = this;
    this.addEventListener("mouseleave", closeToolTip);
  }

  const followMouse = {
    handleEvent(event) {
      this.toolTipBox.style.top = `${event.pageY + 20}px`;
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const closeToolTip = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", closeToolTip);
      this.element.removeEventListener("mousemove", followMouse);
    },
  };

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", showTooltip);
  });

  function criarToolTipBox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
