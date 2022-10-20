const equipmentMethod = require('./equipment.methods');

exports.getAll = async (req, res) => {
  try {
    const equipments = await equipmentMethod.getAll();
    return res.send(equipments);
  } catch (error) {
    return null;
  }
};
exports.get = async (req, res) => {
  try {
    const equipmentId = req.params.equipmentId;
    const equipment = await equipmentMethod.getEquipment(equipmentId);
    if (!equipment) return res.status(400).send('Equipment is not found!');
    return res.send(equipment);
  } catch (error) {
    return null;
  }
};
exports.getByUserId = async (req, res) => {
  const userId = req.params.userId;
  const equipment = await equipmentMethod.getEquipmentByUserId(userId);
  if (!equipment) return res.status(400).send('Equipment is not found!');
  return res.send(equipment);
};
exports.create = async (req, res) => {
  try {
    const reqEquipment = req.body;
    const user = req.user;
    const equipment = await equipmentMethod.create(reqEquipment, user);
    if (!equipment)
      return res.status(400).send('Creating Equipment is not completed!');
    return res.send(equipment);
  } catch (error) {
    return null;
  }
};
exports.update = async (req, res) => {
  try {
    const equipmentId = req.params.equipmentId;
    const reqEquipment = req.body;
    const user = req.user;
    const equipment = await equipmentMethod.update(
      equipmentId,
      reqEquipment,
      user,
    );
    if (!equipment)
      return res.status(400).send('Updating Equipment is not completed!');
    return res.send(equipment);
  } catch (error) {}
};
exports.delete = async (req, res) => {
  try {
    const equipmentId = req.params.equipmentId;
    const result = await equipmentMethod.delete(equipmentId);
    return result
      ? res.status(200).send('Deleting Role is completed!')
      : res.status(400).send('Deleting Role is not completed!');
  } catch (error) {}
};
