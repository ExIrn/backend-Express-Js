

const { Car } = require('../models')




class CarController{
    static async get(req,res){
        try {
            const response = await Car.findAll()

            return res.status(200).json(response)
            // res.send('hello this is get controller from car')
        } catch (error) {
            return res.status(500).json(error)
        }
    }





    static async create(req,res){
        try {
            let payload = {
                name : req.body.name,
                type: req.body.type,
                year: +req.body.year,
                brand: req.body.brand
            }

            const response = await Car.create(payload)
            return res.status(201).json(response)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async getDataById(req,res){
        try {
            const id = +req.params.id
            const response = await Car.findAll({
                where:{
                    id:id
                }
            })
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json(error)
        }
    }


    static async update(req,res){
        try {
            const id = +req.params.id

            let payload = {
                name : req.body.name,
                type: req.body.type,
                year: +req.body.year,
                brand: req.body.brand
            }

            const response = await Car.update(payload, {
                where: {
                    id:id
                }
            })
            return res.status(201).json({message : "Success to update"})
        } catch (error) {
            return res.status(500).json(error)
        }
    }



    static async delete(req,res){
        try {
            const id = +req.params.id
            const response = await Car.destroy({
                where:{
                    id:id
                }
            })
            
            return res.status(200).json({
                message: 'Success to delete'
            })

        } catch (error) {
            return res.status(500).json(error)
        }
    }

}

module.exports = CarController