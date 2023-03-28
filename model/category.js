//Example Model
module.exports = mongoose => {
    const Category = mongoose.model(
        "category",
        mongoose.Schema(
            {
                category: String,
                status: {
                    type: String,
                    enum: ['active', 'inactive'],
                    default: 'active'
                },
                published: Boolean
            },
            { timestamps: true }
        )
    );

    return Category;
};