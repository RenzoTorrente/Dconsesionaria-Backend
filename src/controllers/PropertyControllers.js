const { error } = require("../helpers/CreateError");
const { propertiesFilter } = require("../helpers/propertiesFilter");
const {
  createprop,
  deleteprop,
  getOptions,
  getAlloptions,
} = require("../utilities/Propertyutilities");

exports.CreateProperty = async (req, res, next) => {
  let { categoryid } = req.params;
  console.log("id de category", categoryid);
  let { name } = req.body;
  try {
    await createprop(parseInt(categoryid), name);
    res.status(200).json({ message: "la propiedad se creó con exito" });
  } catch (err) {
    next(err);
  }
};
exports.GetAllPropertiesOptions = async (req, res, next) => {
  let {vehicleid} = req.params;
  try {
    const options = await getOptions(parseInt(vehicleid));
    const optionnotin = await getAlloptions();
    if (options.length) {
      let resproperties = propertiesFilter(options, optionnotin);
      res.status(200).json(resproperties);
    } else {
      res.status(200).json({ optionnotin });
    }
  } catch (err) {
    next(err);
  }
};

exports.Deleteproperty = async (req, res, next) => {
  let { id } = req.params;
  try {
    let propertytodelete = await deleteprop(parseInt(id));
    if (!propertytodelete) {
      error("no existe la propiedad que deseas eliminar", 200);
    }
    res.status(200).json({ message: "la propiedad se eliminó con exito" });
  } catch (err) {
    next(err);
  }
};
