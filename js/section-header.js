const sectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header .icon-button'
);
const showFullSection = (e) => {
  const productShipment = e.target.parentNode.parentNode;
  productShipment.classList.add('is-open');
};

sectionHeaderIconButton.addEventListener('click', showFullSection);
