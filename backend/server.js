require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDb  = require("./db");

const Todo = require("./models/todo");

const app = express();

// middlewares 
app.use(cors());
app.use(express.json());

connectDb();

// home route
app.get("/", (req, res) => {
    res.json({
        message: "Todo API is working"
    });
});

// fetch all the todos
app.get("/api/todos", async (req, res) => {
    try {

        const todos = await Todo.find();

        res.status(200).json(todos);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to fetch todos",
            error: error.message
        });
    }
});


app.get("/api/todos/:id", async (req, res) => {
    try {

        const { id } = req.params;

        const [rows] = await pool.query(
            "SELECT * FROM todos WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.status(200).json(rows[0]);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to fetch todo",
            error: error.message
        });
    }
});


app.post("/api/todos", async (req, res) => {
    try {

        const { title, completed  } = req.body;
        
        const todo = await Todo.create({
            title,
            completed
        });

        res.json(todo);


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to create todo",
            error: error.message
        });
    }
});


app.put("/api/todos/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const { title, completed } = req.body;


        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        const [rows] = await pool.query(
            "SELECT * FROM todos WHERE id = ?",
            [id]
        );

        res.status(200).json(rows[0]);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to update todo",
            error: error.message
        });
    }
});


app.delete("/api/todos/:id", async (req, res) => {
    try {

        const todo = await Todo.findByIdAndDelete(req.params.id);

        if(!todo) {
            return res.status(404).json({
                message: "Todo not found"
            })
        }

        res.status(200).json({
            message: "Todo deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to delete todo",
            error: error.message
        });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started");
})