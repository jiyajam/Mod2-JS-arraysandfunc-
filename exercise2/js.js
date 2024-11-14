let numberOfParticipants = parseInt(prompt("Enter the number of participants:"));
let participants = [];

for (let i = 0; i < numberOfParticipants; i++) {
    let name = prompt(`Enter participant ${i + 1} name:`);
    participants.push(name);
}

participants.sort();

let list = "<ol>";
participants.forEach(function(participant) {
    list += `<li>${participant}</li>`;
});
list += "</ol>";

document.getElementById("participants-list").innerHTML = list;
