const animalModel = require('../Models/Animals');


exports.getAnimal = (req, res, next) => {
    try {
        var animal = animalModel.findAll();
        animal.then((result) => {

            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }

};

exports.getByIdAnimal = (req, res, next) => {
    try {
        var FindAnimal = animalModel.findAll({
            where:
            {
                id: req.params.id
            }
        });
        if (FindAnimal != null) {
            FindAnimal.then((result) => {
                res.status(200).json(result);
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            res.status(400).send({
                message: "Bulunamadi"
            })
        }
    } catch (error) {
        console.log(error);
    }
}


exports.postAnimal = (req, res, next) => {
    try {
        if (req.body != null) {
            animalModel.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                createdAt: req.body.createdAt,
                updatedAt: req.body.updatedAt
            });
            res.status(201).send({
                message: "Animal Başariyla oluşturuldu"
            })
        }
        else {
            return res.status(400).send({
                message: "Bir şeyler ters gitti!"
            })
        }
    } catch (error) {
        console.log(error);
    }

}

exports.DeleteAnimal = (req, res, next) => {
    try {
        var DeleteAnimal = animalModel.destroy({
            where: {
                id: req.params.id
            },
            force: true
        });
        return res.send({
            message: "Başariyla silindi"
        })

    } catch (error) {
        console.log(error);
        return res.send({
            message: "Silme işlemi Başarisiz"
        })
    }
}


exports.PutAnimal = (req, res, next) => {
    try {
        animalModel.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
        }, { where: { id: req.params.id } });

        return res.send({
            message: "Güncelleme Başarili"
        })

    } catch (error) {
        console.log(error);
        return res.send({
            message: "Güncelleme Başarisiz."
        })
    }
}


