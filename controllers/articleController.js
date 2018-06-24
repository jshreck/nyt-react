const db = require("../models");

//need to edit -> copied findall and create from class examples and updateSave from Olive
module.exports = {
    findAll: (req, res) => {
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateSave: (req, res) => {
        db.Article.findOneAndUpdate(
            { _id: req.params.id },
            { $set: { saved: saved } },
            { new: true }
        ).then((article) => {
            res.json(article);
        }
        ).catch(err => {
            res.json(err);
        });
    }
};

//findAll
//save