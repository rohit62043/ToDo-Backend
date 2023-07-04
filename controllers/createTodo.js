//import the model
const Todo = require("../models/todo");

//define route handler
module.exports.createTodo = async (req, res) => {
    try {
        //extract title and description from request body
        const { title, description } = req.body;
        //creating a new Todo object and inserting it in the database
        const response = await Todo.create({ title, description });
        //send a jason response with a sucess flag
        res.status(200).json({
            sucess: true,
            data: response,
            Message: "Entry created successfully"
        });

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            sucess: false,
            data: "internal server error",
            message: err.message,
        });
    }
}