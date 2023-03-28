const db = require("../model/db")
// const bcrypt = require("bcrypt");
const Category = db.categories

exports.addCategory = (data) => {
    try {
        return Category.create(data)
            .then((res) => {
                return true
            })
    } catch (error) {
        throw error
    }
}
exports.editCategory = (data, categoryId) => {
    try {
        return Category.findOneAndUpdate(
            { _id: categoryId }, data)
            .then(() => {
                return true
            })
    } catch (error) {
        throw error
    }
}
exports.deleteCategory = (categoryId) => {
    try {
        return Category.deleteOne(
            { _id: categoryId })
            .then(() => {
                return true
            })
    } catch (error) {
        throw error
    }
}
exports.getCategory = ({ limit = 10, offset = 0, search = '' }) => {
    try {
        limit = +limit
        offset = +offset
        return Category.find()
            .where({ category: { $regex: search } })
            .limit(limit)
            .skip(offset)
    } catch (error) {
        throw error
    }
}