import { Http } from "apis/http";
import { config } from "../auth/authService";

const getCategorys = async (userData) => {
  const response = await Http.get("Admin/categories");
  return response.data;
};

const getACategory = async (id) => {
  const response = await Http.get(`Admin/categories/${id}`);
  return response.data;
};


const createCategory = async (data) => {
  const response = await Http.post(`Admin/categories/add`, data, config)
  return response.data
}

const updateCategory = async (category) => {
  const response = await Http.put(
    `Admin/categories/edit/${category.id}`,
    { title: category.categoryData.title },
    config
  );
  return response.data;
};

const deleteCategory = async (id) => {
  const response = await Http.delete(`Admin/categories/remove/${id}`, config)
  return response.data
}

const adminCategoryService = {
  getCategorys,
  createCategory,
  getACategory,
  updateCategory,
  deleteCategory
}
export default adminCategoryService