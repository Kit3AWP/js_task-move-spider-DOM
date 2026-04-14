'use strict';

const container = document.querySelector('.wall');
const spider = document.querySelector('.spider');

container.addEventListener('click', (e) => {
  const rect = container.getBoundingClientRect();

  const clickX = e.clientX - rect.left - container.clientLeft;
  const clickY = e.clientY - rect.top - container.clientTop;

  let x = clickX - spider.offsetWidth / 2;
  let y = clickY - spider.offsetHeight / 2;

  const maxX = container.clientWidth - spider.offsetWidth;
  const maxY = container.clientHeight - spider.offsetHeight;

  x = Math.min(maxX, Math.max(0, x));
  y = Math.min(maxY, Math.max(0, y));

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
