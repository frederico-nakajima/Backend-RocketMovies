module.exports = {
    jwt: {
        secret: process.env.AUTH_SECRET || "default",
        expiresIn:"1d"
    }
}


const PORT = process.env.SERVER_PORT;
