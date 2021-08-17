exports.getHome = (req, res) => {
    res.status(200).render('portfolio', {
        title: 'Falence Lemungoh'
    })
}