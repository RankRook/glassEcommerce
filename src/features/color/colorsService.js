import { Http } from "apis/http"
import { config } from "../auth/authService"

const getColors = async () => {
  const response = await Http.get("Admin/colors")
  return response.data
}

const createColor = async (dataColor) => {
  const response = await Http.post("Admin/colors/add", dataColor, config)
  return response.data
}

const getAColor = async (id) => {
  const response = await Http.get(`Admin/colors/${id}`, config);
  return response.data;
};

const updateColor = async (color) => {
  const response = await Http.put(
    `Admin/colors/edit/${color?.id}`,
    {
      colorName: color.colorData.name,
      code: color.colorData.code,
    },
    config
  );

  return response.data;
};
const deleteColor = async (id) => {
  const response = await Http.delete(`Admin/colors/remove/${id}`, config)
  return response.data
}

const colorService = {
  getColors,
  createColor,
  getAColor,
  updateColor,
  deleteColor
}
export default colorService