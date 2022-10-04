const nodemailer = require('nodemailer')

const emailRegister = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
      });

      const {username , email , token } = datos

      const info = await transport.sendMail({
        from : "CellStore - eCommerce celulares",
        to: email,
        subject : "Comprueba tu cuenta en CellStore",
        text : "Comprueba tu cuenta en CellStore",
        html : `<p>Hola ${username}, comprueba tu cuenta de CellStore.</p>
        <p> Tu cuenta esta lista, solo debes comprobarla en el siguiente enlace</p>
         <a href="${process.env.FRONTEND_URL}/confirm/${token}">Comprobar cuenta</a>
         <p>Si tu no creaste esta cuenta, puedes ignorar este email</p>`

         
      })

      console.log("Mensaje enviado: %s", info.messageId)
} 

module.exports = emailRegister