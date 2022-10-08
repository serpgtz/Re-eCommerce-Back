const { preferences } = require('mercadopago')
const mercadoPago = require('mercadopago')
const postOrder = async (req, res) => {
    
    const { products } = req.body

    

    mercadoPago.configure({
        access_token : process.env.ACCESS_TOKEN
    })

    var preference = {
        items: products.map(p => {
            return {
                title: p.name,
                quantity: p.quantity,
                currency_id: 'ARS',
                unit_price: p.price
            }
        }),

        notification_url : 'https://7dc8-2800-810-513-8238-906d-b857-4d52-30c5.sa.ngrok.io'
      };
      
     const response = await mercadoPago.preferences.create(preference)
     res.json(response)
    
}

const notification =  (req, res) => {
    const datos = req.query

    console.log(datos)
    res.status(200)
}
module.exports = {
    postOrder,
    notification

}