let dogNames = [];

for (let i = 0; i < 6; i++) {
    let dogName = prompt(`Enter the name of dog ${i + 1}:`);
    dogNames.push(dogName);
}

dogNames.sort().reverse();

let list = "<ul>";
dogNames.forEach(function(dogName) {
    list += `<li>${dogName}</li>`;
});
list += "</ul>";

document.getElementById("dog-list").innerHTML = list;
