'use server'

export async function getProducts() {
    try{
        const res = await fetch('http://146.190.140.32/api/v1/products/')
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }
}

export async function getContacts() {
    try{
        const res = await fetch('http://146.190.140.32/api/v1/contact/')
        const data = await res.json()
        return data
    } catch(e) {
        console.log(e)
    }
}


export async function getProductById(id:number | string) {
    try {
        const res = await fetch(`http://146.190.140.32/api/v1/products/${id}/`)
        const data = await res.json()
        return data
      
    } catch(e) {
       console.log(e)
    }
}