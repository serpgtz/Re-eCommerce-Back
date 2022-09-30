

const perfil = (req, res) => {

    res.status(200).json(req.user)
}


module.exports = {perfil}