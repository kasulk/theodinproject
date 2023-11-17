export function createLiElement(
  propertyTitle: string,
  property: string | number | boolean
): HTMLLIElement {
  const liElement = document.createElement("li");
  liElement.appendChild(createSpanElement(propertyTitle));
  liElement.appendChild(createSpanElement(property));

  return liElement;
}

export function createSpanElement(
  content: string | number | boolean
): HTMLSpanElement {
  const span = document.createElement("span");
  span.textContent = String(content);
  return span;
}
