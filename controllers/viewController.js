exports.getHome = (req, res) => {
    res.status(200).render('index', {
        title: 'Falence Lemungoh'
    })
}