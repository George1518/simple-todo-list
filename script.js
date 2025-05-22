const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const list = document.getElementById("content");
  const item = document.getElementById("item").value;
  const li = document.createElement("p");
  const del = document.createElement("button");
  const div = document.createElement("div");

  if (item != "") {
    del.setAttribute("id", "delete");
    div.setAttribute("id", "box");

    div.appendChild(li);
    li.textContent = item;
    list.appendChild(div);

    saveToLocal(item);

    del.innerText = "Delete";
    li.appendChild(del);

    del.addEventListener("click", () => {
      del.innerText = "Confirm";
      del.style.backgroundColor = " rgb(169, 33, 33)";

      del.addEventListener("click", () => {
        div.remove();
        removeFromLocal(item);
      });
    });
  } else {
    alert("Enter a Task");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedItems = JSON.parse(localStorage.getItem("taskList")) || [];
  savedItems.forEach((task) => {
    const list = document.getElementById("content");
    const li = document.createElement("p");
    const del = document.createElement("button");
    const div = document.createElement("div");

    del.setAttribute("id", "delete");
    div.setAttribute("id", "box");

    div.appendChild(li);
    li.textContent = task;
    list.appendChild(div);

    del.innerText = "Delete";
    li.appendChild(del);

    del.addEventListener("click", () => {
      del.innerText = "Confirm";
      del.style.backgroundColor = " rgb(169, 33, 33)";

      del.addEventListener("click", () => {
        div.remove();
        removeFromLocal(task);
      });
    });
  });
});

function saveToLocal(task) {
  let tasks = JSON.parse(localStorage.getItem("taskList")) || [];
  tasks.push(task);
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

function removeFromLocal(task) {
  let tasks = JSON.parse(localStorage.getItem("taskList")) || [];
  tasks = tasks.filter((t) => t !== task);
  localStorage.setItem("taskList", JSON.stringify(tasks));
}
