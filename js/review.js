const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
);

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';
// const checkIcon = '<i class="ic-check" aria-hidden></i>도움됨';

function toggleReviewLikeButton() {
  this.classList.toggle('btn-primary');
  this.classList.toggle('btn-outlined');

  const isLiked = this.classList.contains('btn-primary');
  const textElement = this.nextElementSibling;
  const reviewCardFooter = this.parentNode;

  if (isLiked) {
    this.innerHTML = HELPFUL;

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('ic-check');
    checkIcon.setAttribute('aria-hidden', true);
    this.prepend(checkIcon);
  } else {
    this.innerHTML = NOT_HELPFUL;
  }

  if (textElement) {
    const countSpan = textElement.querySelector('span');
    let count = +countSpan.innerHTML.replaceAll(',', '');

    if (isLiked) {
      count++;
      countSpan.innerHTML = count.toLocaleString();
    } else {
      count--;
      countSpan.innerHTML = count.toLocaleString();

      if (count === 0) {
        reviewCardFooter.removeChild(textElement);
      }
    }
  } else {
    if (isLiked) {
      const newTextElement = document.createElement('p');
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이 되었습니다.';

      reviewCardFooter.appendChild(newTextElement);
    }
  }
}

reviewLikeButtonList.forEach((reviewLikeButton) =>
  reviewLikeButton.addEventListener('click', toggleReviewLikeButton)
);
