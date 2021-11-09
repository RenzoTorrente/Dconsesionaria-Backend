const { PropertyValue, VehicleProperty, Vehicle } = require("../models/index");


exports.UpdateValue = async (score, carid, propid) => {
  const updateprop = await PropertyValue.update(
    { value: score },
    { where: { VehicleId: carid, VehiclePropertyId: propid } }
  );
  return updateprop;
};


exports.Propertiescarwv = async (vehicleid, Categoryid) => {
  let properties = await VehicleProperty.findAll({
    where: {Categoryid},
    include: [{model: Vehicle, where: { id: vehicleid }}],
  });
  return properties;
};

//when adding a property the initial value will be 0
exports.AddValue = async (carid, propid) => {
  const updateprop = await PropertyValue.create({VehicleId: carid, VehiclePropertyId: propid});
  return updateprop;
};