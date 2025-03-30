const { PREFIX } = require("../../krampus");
const path = require("path");

module.exports = {
  name: "abrir",
  description: "Abre el grupo, permitiendo que todos los miembros puedan enviar mensajes.",
  commands: ["abrir"],
  usage: `${PREFIX}abrir`,
  handle: async ({ socket, remoteJid, sendReply }) => {
    try {
      o
      if (!remoteJid.endsWith("@g.us")) {
        await sendReply("❌ Este comando solo puede usarse en grupos.");
        return;
      }

      await socket.groupSettingUpdate(remoteJid, "not_announcement");

      const mensaje = "Grupo abierto.\n> Todos los miembros pueden enviar mensajes.";
      const link = "https://www.instagram.com/KrampusOM/";

      await socket.sendMessage(remoteJid, {
        text: mensaje,
        buttons: [
          {
            url: link,
            text: "Únete",
          },
        ],
        contextInfo: {
          isForwarded: true, 
          forwardingScore: 2, 
          participant: "1203630250000000@c.us", 
          externalAdReply: {
            title: "Krampus OM bot",
            body: "Operación Marshall",
            thumbnailUrl: `file://${path.resolve(__dirname, "../../../assets/images/celda2.png")}`, 
            sourceUrl: link, 
          },
        },
      });
    } catch (error) {
      console.error("Error al intentar abrir el grupo:", error);
      await sendReply("❌ No se pudo abrir el grupo. Asegúrate de que el bot es administrador.");
    }
  },
};
