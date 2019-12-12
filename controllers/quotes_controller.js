const QuoteModel = require('../database/models/quote_model');

async function index(req, res) {
    const quotes = await QuoteModel.find();
    res.json(quotes);
}

async function create(req, res) {
    const { quote, date } = req.body;
    const newQuote = await QuoteModel.create({ quote, date })
        .catch(err => res.status(500).send(err));
    res.json(newQuote);

}

async function show(req, res) {
    const { id } = req.params;
    const quote = await QuoteModel.findById(id);
    res.json(quote);
}

module.exports = {
    index,
    create,
    show
}