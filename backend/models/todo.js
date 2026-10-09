 const mongoose = require("mongoose");

 const todoSchema = new mongoose.Schema (
    {
         title: {
            type: String,
            required: true,
            trim: true
        },

        completed : {
            type: Boolean,
            default: false
        },
    },

        {
            timestamps: true,
            collection: "todo_app"
        }
 );

 const Todo = mongoose.model("Todo", todoSchema);

 module.exports = Todo;

 