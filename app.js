// const boxEl = document.querySelector(".box")
// const checkEl = document.querySelector(".check")
// const bodyEl = document.querySelector("body")


// const savedTheme = localStorage.getItem("isActive") || ""

// if (savedTheme === "dark") {
//     checkEl.classList.toggle("active");
//     bodyEl.classList.add("dark")
// } else {
//     bodyEl.classList.remove("dark")
//     localStorage.setItem("isActive", "light")
// }

// boxEl.addEventListener("click", () => {
//     checkEl.classList.toggle("active");
//     if (checkEl.classList.contains("active")) {
//         localStorage.setItem("isActive", "dark")
//         bodyEl.classList.add("dark")
//     } else {
//         bodyEl.classList.remove("dark")
//         localStorage.setItem("isActive", "light")
//     }
// });




// При натисканні зберегти значення інпуту в localStorage.

// const input = document.querySelector("#nameInput")
// const btn = document.querySelector("#saveBtn")
// const restBtn = document.getElementById("clearBtn");
// const text = document.querySelector("#textArea")


// const mavedName = localStorage.getItem("username") || ""
// saveName.value = mavedName


// clearBtn.addEventListener("click",  () => {
//     localStorage.removeItem("userName")
//     localStorage.removeItem("coment")
// })


// btn.addEventListener("click", () => {
//     localStorage.setItem("username", saveName.value)
//     saveName.value = ""
// })

// const saveText = localStorage.getItem("coment") || ""
// text.value = ""

// text.addEventListener("input", () => {
//     localStorage.setItem("coment", text,value)
// })






const form = document.querySelector(".form-js");

const STORAGE_KEY = "formData";

function savedForm() {
  const data = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    tel: form.elements.tel.value,
    comment: form.elements.comment.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadForm() {
  const parselData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  
  const { name, email, tel, comment } = parselData;

  if (name) form.elements.name.value = name;
  if (email) form.elements.email.value = email;
  if (tel) form.elements.tel.value = tel;
  if (comment) form.elements.comment.value = comment;
}

form.addEventListener("input", () => {
  savedForm(); // виклик функції
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});

loadForm();

