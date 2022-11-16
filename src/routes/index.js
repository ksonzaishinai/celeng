const { Router } = require("express");
const models = require("../db/models");
const router = Router();
const Role = models.Role;

router.post("/", async (req, res) => {
  try {
    const result = await Role.create(req.body);
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const result = await Role.findAll();
    response.json({ data: result });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const result = await Role.findByPk(request.params.id);
    response.status(201).json({ data: result });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (request, response) => {
  try {
    await Role.update(request.body, { where: { id: request.params.id } });

    response.json({ message: "Terupdate" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    await Role.destroy({ where: { id: request.params.id } });
    response.json({ message: "Terhapus" });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;
