const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static(__dirname));

// Route principale qui sert le fichier HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'guide_stimuli_cortex_prefrontal.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 