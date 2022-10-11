const mercadoPago = require('mercadopago')


const mercadoPagoLink = async (products) => {



    try {
        mercadoPago.configure({
            access_token : process.env.ACCESS_TOKEN
        })

        const preference = {
            items: products.map(p => {
                return {
                    title: p.name,
                    quantity: p.quantity,
                    currency_id: 'ARS',
                    unit_price: p.price
                }
            }),
    
            notification_url : 'https://10e2-2800-810-513-68e-7cc4-e94a-469b-4cc9.sa.ngrok.io/notification'
          };
          
         const response = await mercadoPago.preferences.create(preference)

         return response.body.init_point
    } catch (error) {
        console.log(error)
    }
}

module.exports = mercadoPagoLink