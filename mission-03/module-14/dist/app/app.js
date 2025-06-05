"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../db/todo.json");
app.use("/", todosRouter);
todosRouter.get("/todos", (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json({
        message: "from todos router",
        data,
    });
});
app.get("/", (req, res) => {
    res.send("Hello World!!!");
});
app.get("/todos/:title", (req, res) => {
    console.log(req.query);
    console.log(req.params);
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    // console.log(data);
    res.json(data);
});
app.post("/todos/create-todo", (req, res) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.json({ title, body });
});
exports.default = app;
