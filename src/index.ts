/* import { users, products } from "./database";

console.table(users)
console.table(products) */

/* import { createProduct, createUser, getAllProducts, getAllUsers, products, searchProductsByName, searchUsersByName } from "./database"; */
import express, { Request, Response } from 'express'
import cors from 'cors'
import { createProduct, createUser, getAllProducts, products, searchProductsByName, users } from './database'


/* console.log(createUser("a3", "Bob", "bob@exemple.com", "012345"))
console.log(createProduct("p3", "Placa de Pix 3", 170, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "link da imagem da placa de pix 3 Qr code"))

console.table(getAllUsers())
console.table(getAllProducts()) */

/* console.table(searchUsersByName("DhO"))
console.table(searchProductsByName("plACa")) */

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

//teste ping pong
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

// Get All Users

app.get("/users", (req:Request, res:Response) => {
    res.status(200).send(users)
})


// Get products by name if not get all

app.get("/products", (req:Request, res:Response)=>{

    const name = req.query.name as string
    let response 
    if (name){
        response = searchProductsByName(name)
    }else{
        response = getAllProducts()
    }

    res.status(200).send(response)
})

app.post("/users", (req:Request, res:Response)=>{

    const {id, name, email, password} = req.body

    res.status(200).send(createUser(id, name, email, password))

    console.log(users)
})

app.post("/products", (req:Request, res:Response)=>{

    const {id, name, price, description, imageUrl} = req.body

    res.status(200).send(createProduct(id, name, price, description, imageUrl))

    console.log(products)
})