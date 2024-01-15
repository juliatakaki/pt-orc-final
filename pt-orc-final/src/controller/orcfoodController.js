import Orcfood from '../model/orcfoodModel.js';

class OrcfoodController {
  async getAllOrcfoods(req, res) {
    try {
      const orcfoodList = await Orcfood.find();
      res.status(200).json(orcfoodList);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async searchOrcfoodsByCategory(req, res) {
    try {
      const { category } = req.query;

      if (!category) {
        return res.status(400).json({ error: "Category is required for search" });
      }

      const matchingOrcfoods = await Orcfood.find({ categoria: category });

      if (matchingOrcfoods.length === 0) {
        return res.status(404).json({ error: "No Orcfood found for the specified category" });
      }

      res.status(200).json(matchingOrcfoods);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new OrcfoodController();
