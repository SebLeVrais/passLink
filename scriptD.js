function addLink() {
    const linkInput = document.getElementById("linkInput");
    const linkList = document.getElementById("linkList");

    if (linkInput.value.trim() === "") {
        return;
    }

    const link = linkInput.value.trim();
    linkInput.value = "";

    const li = document.createElement("li");
    li.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;

    linkList.appendChild(li);
}

document.getElementById("linkInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addLink();
    }
});
