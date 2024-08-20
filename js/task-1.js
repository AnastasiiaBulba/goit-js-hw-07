const categoriesEl = document.querySelectorAll('#categories > *').length;
console.log(`Number of categories: ${categoriesEl}`);

const titleCategories = document.querySelectorAll('h2').forEach(item => {
  const title = item.textContent;
  const parentItem = item.closest('.item');
  const elementsLi = parentItem.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsLi}`);
});
