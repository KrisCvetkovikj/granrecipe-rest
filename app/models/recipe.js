import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	title: {type: String, required: true},
	desc: {
		type: String,
		required: true,
	},
	// likes: [{type: Schema.Types.ObjectId, ref: 'Like'}],
	// comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	calories: {type: Number},
	carbs: {type: Number},
	fats: {type: Number},
	protein: {type: Number},
	// public: {type: Boolean},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
	timestamps: true,
});

const RecipeModel = mongoose.model('Recipe', RecipeSchema);

export default RecipeModel;
