const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 3001;


app.use(cors());
app.use(express.json());


app.get('/questions', async (req, res) => {
  const { difficulty } = req.query;

  try {

    const response = await axios.get(`http://localhost:8080/questions?difficulty=${difficulty}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pergunta', error: error.message });
  }
});


app.post('/validate', async (req, res) => {
  const { questionId, answer } = req.body;

  try {

    const response = await axios.post('http://localhost:8080/questions/validate', {
      questionId,
      answer
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao validar resposta', error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
