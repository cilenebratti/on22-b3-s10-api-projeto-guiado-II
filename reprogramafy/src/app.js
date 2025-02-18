const express = require("express") // importa express
const app = express() // executo o express

app.use(express.json()) // uso o body parse

const songsRoutes = require("./routes/songsRoutes") // importa as rotas de songs
app.use("/reprogramafy/playlist", songsRoutes) // definou rota padrão para songs

const podcastsRoutes = require("./routes/podcastsRoutes") // importa as rotas de podcasts
app.use("/reprogramafy/podcasts", podcastsRoutes)


module.exports = app // exportando para usar o server.js

