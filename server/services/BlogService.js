const BlogModel = require("../models/Blog");
const BlogDetailsModel = require("../models/Blog");

exports.getAllBlogs = async () => {
  return await BlogModel.find();
};

exports.createBlog = async (blog) => {
  return await BlogDetailsModel.create(blog);
};
exports.getBlogById = async (id) => {
  return await BlogDetailsModel.findById(id);
};

exports.updateBlog = async (id, blog) => {
  return await BlogDetailsModel.findByIdAndUpdate(id, blog);
};

exports.deleteBlog = async (id) => {
  return await BlogDetailsModel.findByIdAndDelete(id);
};
