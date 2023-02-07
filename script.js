//kiirjuk mit tartalmaz a document objektum
//console.dir(document);

//kiirjuk a webszajt URL-et
//console.log(document.URL);

//kiirjuk a web szajt cimet
//console.log(document.title);

//kicsereljuk a web szajt cimet
//document.title = "document";

//kiirja mit tartalmaz a head objektum
//console.log(document.head);

//kiirjuk az osszes html elemet mint egy tomb
console.log(document.all);
//a nyolcadik elem a h1
console.log(document.all[8]);

//a h1-nek a textContent tulajdonsagat kicsereljuk
//document.all[8].textContent = "Masik cim";

//console.log(document.getElementById("main_title"));
//document.getElementById("main_title").textContent = "harmadik cim";

//let cim = document.getElementById("main_title");
//cim.textContent = "negyedikCim";

let items = document.getElementsByClassName("item");
console.log(items);

//items[2].textContent = "valami mas";
//items[2].style.backgroundColor = "grey";

for (let i = 0; i < items.length; i++) {
  if (i % 2 == 1) {
    items[i].style.backgroundColor = "#D8D8D8";
  }
}
