/* import { users, products } from "./database";

console.table(users)
console.table(products) */

/* import { createProduct, createUser, getAllProducts, getAllUsers, products, searchProductsByName, searchUsersByName } from "./database"; */
import express, { Request, Response } from 'express'
import cors from 'cors'
import { createProduct, createUser, getAllProducts, products, searchProductsByName, users } from './database'
import { TProducts, TUsers } from './types'



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

app.get("/users", (req: Request, res: Response) => {
    try {
        const name = req.query.name as string;
        const userFilter = users.filter((users) =>
        users.name.toLowerCase().includes(name.toLowerCase())
    )
    if(!userFilter.length){
        res.statusCode=404;
        throw new Error("User not found")
    }
    if(name){
        res.status(200).send(userFilter);
    }else{
        res.status(200).send(users)
    }
    } catch (error) {
        if (error instanceof Error) {
        res.send(error.message);
        }
        res.status(500).send("Unknown error");
    }
})


// Get products by name if not get all

app.get("/products", (req:Request, res:Response)=>{
    try {
        const name = req.query.name as string;
        const productsFilter = products.filter((products) =>
        products.name.toLowerCase().includes(name.toLowerCase())
    )
    if(!productsFilter.length){
        res.statusCode=404;
        throw new Error("Produto não encontrado!")
    }
    if(name){
        res.status(200).send(productsFilter);
    }else{
        res.status(200).send(products)
    }
    } catch (error) {
        if (error instanceof Error) {
        res.send(error.message);
        }
        res.status(500).send("Unknown error")
    }
})

app.post("/users", (req:Request, res:Response)=>{
    try {
        const {id, name, email, password} = req.body
        const verificarId = users.find((user) => user.id === id)
        const verificarEmail = users.find((user) => user.email === email)
        const createdAt = new Date().toISOString();
        const newUser:TUsers = {id, name, email, password, createdAt}

        if(!id || !name || !email || !password){
            res.statusCode = 428
            throw new Error("Todos os campos são obrigatórios!")
        }
        if(verificarId){
            res.statusCode = 412
            throw new Error("Já existe um usuário com esse ID!")
        }
        if(verificarEmail){
            res.statusCode = 412
            throw new Error("Já existe um usuário com esse E-mail!")
        }
        users.push(newUser)
        res.status(200).send("Usuário cadastrado com sucesso!")
        
    } catch (error) {
        if (error instanceof Error) {
        res.send(error.message);
        }
        res.status(500).send("Unknown error")
    }
})

app.post("/products", (req:Request, res:Response)=>{

    try {
        const {id, name, price, description, imageUrl} = req.body
        const verificarId = products.find((products) => products.id === id)
        const newProduct:TProducts = {id, name, price, description, imageUrl}

        if(!id || !name || !price || !description || !imageUrl){
            res.statusCode = 428
            throw new Error("Todos os campos são obrigatórios!")
        }
        if(verificarId){
            res.statusCode = 412
            throw new Error("Já existe um produto com esse ID!")
        }
        // Verificar se o campo balance é um número.
        if (typeof price !== "number") {
            res.statusCode = 404
            throw new Error("O campo price deve ser um número!")
        }

        products.push(newProduct)
        res.status(200).send("Produto cadastrado com sucesso!")
        
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
            }
            res.status(500).send("Unknown error")
    }
})

app.delete("/users/:id", (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const findUsersIndex = users.findIndex((users) => {
        return users.id === id
    })

    if(findUsersIndex < 0){
        res.statusCode = 404
        throw new Error("Usuário não encontrado!")
    }
        users.splice(findUsersIndex, 1)
        res.status(200).send("Usuário removido com sucesso!")
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
            }
            res.status(500).send("Unknown error")
    }
})

app.delete("/products/:id", (req: Request, res: Response) => {

    try {
        const id = req.params.id
        const findProductsIndex = products.findIndex((products) => {
        return products.id === id
    })

    if(findProductsIndex < 0){
        res.statusCode = 404
        throw new Error("Produto não encontrado!")
    }
        products.splice(findProductsIndex, 1)
        res.status(200).send("Produto removido com sucesso!")
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
            }
            res.status(500).send("Unknown error")
    }
})

app.put("/products/:id", (req: Request, res:Response)=>{
    try {
        const id = req.params.id
        const{id:newId, name, price, description, imageUrl} = req.body
    
        const findProducts = products.find((products)=>{
            return products.id === id
        })

        const findProductsIndex = products.findIndex((products)=>{
            return products.id === id
        })

        if(findProductsIndex < 0){
            res.statusCode = 404
            throw new Error("Produto não encontrado, confira o ID!")
        }
    
        if(findProducts){
            findProducts.id = newId ||findProducts.id
            findProducts.name = name||findProducts.name
            findProducts.price = price||findProducts.price
            findProducts.description = description||findProducts.description
            findProducts.imageUrl = imageUrl||findProducts.imageUrl
            
        }
        // Verificar se o campo price é um número.
        if(price !== undefined){
            if (typeof price !== "number") {
                res.statusCode = 404
                throw new Error("O campo price deve ser um número!")
            }
        }
            res.status(200).send("Atualização completada com sucesso!")
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message);
            }
            res.status(500).send("Unknown error")
    }
})