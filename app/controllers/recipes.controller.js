import BaseController from "./base.controller";
import Recipe from "../models/recipe";

class RecipeController extends BaseController {

	whitelist = [
		"text",
	];

	// Middleware to populate recipe based on url param
	_populate = async(req, res, next) => {
		const {id} = req.params;

		try {
			const recipe = await Recipe.findById(id);

			if (!recipe) {
				const err = new Error("Recipe not found.");
				err.status = 404;
				return next(err);
			}

			req.recipe = recipe;
			next();
		} catch (err) {
			err.status = err.name === "CastError" ? 404 : 500;
			next(err);
		}
	}

	search = async(req, res, next) => {
		try {
			const recipes = (req.query.other !== undefined)
				? await Recipe.find({_user: {$ne: req.currentUser._id}}).populate({
					path: "_user",
					select: "-recipes -role",
				})
				: await Recipe.find({_user: req.currentUser._id}).populate({
					path: "_user",
					select: "-recipes -role",
				});

			console.log(recipes)
			res.json(recipes);
		} catch (err) {
			next(err);
		}
	}

	/**
	 * req.recipe is populated by middleware in routes.js
	 */

	fetch = (req, res) => {
		res.json(req.recipe);
	}

	/**
	 * req.user is populated by middleware in routes.js
	 */

	create = async(req, res, next) => {
		// const params = this.filterParams(req.body, this.whitelist);

		const recipe = new Recipe({
			...req.body,
			_user: req.currentUser._id,
		});
		console.log("HERE", recipe);
		try {
			res.status(201).json(await recipe.save());
		} catch (err) {
			console.log(err);
			next(err);
		}
	}

	delete = async(req, res, next) => {
		/**
		 * Ensure the user attempting to delete the recipe owns the recipe
		 *
		 * ~~ toString() converts objectIds to normal strings
		 */
		if (req.recipe._user.toString() === req.currentUser._id.toString()) {
			try {
				await req.recipe.remove();
				res.sendStatus(204);
			} catch (err) {
				next(err);
			}
		} else {
			res.sendStatus(403);
		}
	}
}

export default new RecipeController();
