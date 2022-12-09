import { getProducts, addProduct, deleteTask } from "./crud.js";

getProducts()

window.addProduct = addProduct
window.deleteTask = deleteTask

// Guardar elementos en el local strage:

//localStorage.setItem("name", "Kevin")

//Obtener un valor del local storage

//console.log( localStorage.getItem("name"))

//const user = { name: "pepito" }

//Convertir el objeto a string para poder guardarlo.
localStorage.setItem("user", JSON.stringify(user))

