'use strict';

const { register, login } = require("./controllers/auth/index")

module.exports = function (app) {
    const router = app.loopback.Router()

    router.post("/api/v1/register", register)

    app.use(router);
}