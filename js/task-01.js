const categories = document.querySelector('#categories');
const countListItem = categories.querySelectorAll('.item');
console.log('Number of categories:', countListItem.length);
// const animalsTitle = categories.firstElementChild.children[0].textContent;
// const animalsCount = categories.firstElementChild.children[1].children.length;
// console.log(`Category: ${animalsTitle}`);
// console.log(`Elements: ${animalsCount}`);

// const productsTitles = categories.lastElementChild.previousElementSibling.children[0].textContent;
// const productsCount = categories.lastElementChild.previousElementSibling.children[1].children.length;
// console.log(`Category: ${productsTitles}`);
// console.log(`Elements: ${productsCount}`);


// const technologiesTitles = categories.lastElementChild.children[0].textContent;
// const technologiesCount = categories.lastElementChild.children[1].children.length;
// console.log(`Category: ${technologiesTitles}`);
// console.log(`Elements: ${technologiesCount}`);

const categoriesSum = document.querySelector('#categories')

function summaryItems() {
  const list = categoriesSum.querySelectorAll('.item')
  console.log('Number of categories:',list.length);

  list.forEach(el => {
    console.log('Category:',el.firstElementChild.textContent);
    console.log('Elements:',
      el.querySelectorAll('li').length,
    );
  });
}

summaryItems();


