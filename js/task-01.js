const listWithClass = document.querySelectorAll(".item");
console.log(listWithClass);
// console.log(`Number of categories: ${listWithClass.length}`);

for (let i = 0; i < listWithClass.length; i += 1) {
    console.log(`Category: ${listWithClass[i].firstElementChild.textContent}`);
    console.log(`Category: ${listWithClass[i].lastElementChild}`);
    // console.log(listWithClass[i].children[i+1].children);
    // console.log(`Èlement: ${listWithClass[i].children[i + 1].children.length}`);

};
