import { TProducts, TUsers } from './types'

export const users: Array<TUsers> = [
    {
        id: "a1",
        name: "Dhouglas",
        email: "dhouglas@example.com",
        password: "123456",
        createdAt: new Date().toISOString()
    },
    {
        id: "a2",
        name: "Alfredo",
        email: "alfredo@example.com",
        password: "654321",
        createdAt: new Date().toISOString()
    }
]

export const products: Array<TProducts> = [
    {
        id: "p1",
        name: "Placa de Pix",
        price: 70,
        description: "Placa de pix em acrílico com 1 Qr Code",
        imageUrl: "link da imagem da placa de pix"
    },
    {
        id: "p2",
        name: "Placa de Pix 2",
        price: 120,
        description: "Placa de pix em acrílico com 2 Qr Code",
        imageUrl: "link da imagem da placa de pix 2 Qr code"
    }
]

export const createUser = (id: string, name: string, email: string, password: string) => {
    const createdAt = new Date().toISOString()
    const newUser:TUsers={id, name, email, password, createdAt}
    users.push(newUser)
    return "Cadastro de usuário realizado com sucesso!"
}

export const createProduct = (id: string, name: string, price: number, description: string, imageUrl: string) => {
    const newProduct:TProducts={id, name, price, description, imageUrl}
    products.push(newProduct)
    return "Cadastro de produto realizado com sucesso!"
}

export const getAllUsers = () => {
    return users
}

export const getAllProducts = () => {
    return products
}

export const searchUsersByName = (name:string) => {
    return users.filter(users => users.name.toLowerCase().includes(name.toLowerCase()))
}

export const searchProductsByName = (name:string) => {
    return products.filter(products => products.name.toLowerCase().includes(name.toLowerCase()))
}

