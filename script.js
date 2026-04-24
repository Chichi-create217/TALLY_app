// Allow adding items with Enter key
document.getElementById('itemInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    let input = document.getElementById("itemInput");
    let list = document.getElementById("list");

    if (input.value.trim() === "") return;

    let li = document.createElement("li");

    let itemContent = document.createElement("div");
    itemContent.className = "item-content";

    let checkbox = document.createElement("div");
    checkbox.className = "custom-checkbox";

    let span = document.createElement("span");
    span.className = "item-text";
    span.textContent = input.value;

    itemContent.appendChild(checkbox);
    itemContent.appendChild(span);

    // Toggle checked state on click
    itemContent.onclick = function () {
        li.classList.toggle("checked");
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    
    // Remove item on delete click
    delBtn.onclick = function (e) {
        e.stopPropagation(); // prevent triggering the check/uncheck
        li.style.opacity = '0';
        li.style.transform = 'scale(0.9)';
        setTimeout(() => li.remove(), 300);
    };

    li.appendChild(itemContent);
    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
    input.focus();
}
