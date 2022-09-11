const listWithClass = document.querySelectorAll(".item");
// console.log(listWithClass);
console.log(`Number of categories: ${listWithClass.length}`);
console.log("");

listWithClass.forEach(elem => {
    console.log(`Category: ${elem.children[0].textContent}`);
    console.log(`Èlements: ${elem.children[1].children.length}`);
    console.log("");
    });

/* ready */
