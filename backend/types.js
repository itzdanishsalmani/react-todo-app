const zod = require('zod');

const addTodoSchema = zod.object({
    title:zod.string(),
    description:zod.string()
})

//export and used in other files
module.exports = {
    addTodoSchema
}