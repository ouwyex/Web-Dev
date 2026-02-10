const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

const STORAGE_KEY = "todo-app-data";

let items = getItems();

function getItems() {
    const value = localStorage.getItem(STORAGE_KEY) || "[]";
    return JSON.parse(value);
}

function setItemns() {
    const itemsJson = JSON.stringify(items);
    localStorage.setItem(STORAGE_KEY, itemsJson);
}

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });
    setItemns();
    refreshList();
}

function updateItem(item, key, value) {
    item[key] = value;
    setItemns();
    refreshList();
}

function deleteItem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
    }
    setItemns();
    refreshList();
}

function refreshList() {
    items.sort((a, b) => {
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        return a.description.localeCompare(b.description);
    });

    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".item-description");
        const completedInput = itemElement.querySelector(".item-completed");
        const deleteButton = itemElement.querySelector(".item-delete");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        descriptionInput.addEventListener("change", () => {
            updateItem(item, "description", descriptionInput.value);
        });

        completedInput.addEventListener("change", () => {
            updateItem(item, "completed", completedInput.checked);
        });

        deleteButton.addEventListener("click", () => {
            deleteItem(item);
        });

        ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
});

refreshList();