/* import { users, products } from "./database";

console.table(users)
console.table(products) */

import { createProduct, createUser, getAllProducts, getAllUsers, products, searchProductsByName, searchUsersByName } from "./database";

/* console.log(createUser("a3", "Bob", "bob@exemple.com", "012345"))
console.log(createProduct("p3", "Placa de Pix 3", 170, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "link da imagem da placa de pix 3 Qr code"))

console.table(getAllUsers())
console.table(getAllProducts()) */

console.table(searchUsersByName("DhO"))
console.table(searchProductsByName("plACa"))