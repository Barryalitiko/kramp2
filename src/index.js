// src/index.js
const path = require("path");
const { question, onlyNumbers } = require("./utils");
const { connect } = require("./connect");  // Importamos la conexión desde services/connect
const { warningLog, infoLog, errorLog, sayLog, successLog, bannerLog } = require("./utils/logger");

async function start() {
  try {
    bannerLog();
    infoLog("Kram está procesando...");
    
    const socket = await connect();

    // Aquí puedes agregar más lógica de tu aplicación, si es necesario

  } catch (error) {
    errorLog("Error al iniciar el bot: ", error);
    process.exit(1);
  }
}

// Inicia el bot
start();
