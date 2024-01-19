import OrcFood from '../models/orcfoodModel.js'

class OrcFoodController{
    async getAllOrcfoods(req, res){
        try{
            const orcfoodList = await OrcFood.find()
            res.status(200).json(orcfoodList)
        } catch(err){
            console.log(err)
            res.status(500).json({error: 'Erro no servidor interno'})
        }
    }

    async searchOrcfoodByCategory(req,res){
        try{
            const { category } = req.query

            if(!category){
                return res.status(400).json({error: 'Categoria é obrigatória para pesquisa'})
            }

            const matchingOrcfoods = await OrcFood.find({ categoria: category})

            if(matchingOrcfoods.length === 0){
                return res.status(404).json({ error: 'Nenhuma OrcFood nessa categoria'})
            }

            res.status(200).json(matchingOrcfoods)
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: ' Erro no servidor interno'})
        }
    }

}

export default new OrcFoodController()