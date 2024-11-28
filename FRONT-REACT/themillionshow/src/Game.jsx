import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const fetchQuestion = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/questions?difficulty=${difficulty}`);
      setQuestion(response.data);
    } catch (error) {
      console.error('Erro ao carregar pergunta', error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, [difficulty]);

  const handleAnswer = async (answer) => {
    try {
      const response = await axios.post('http://localhost:3001/validate', {
        questionId: question.id,
        answer: answer,
      });
      if (response.data) {
        setScore(score + 10);
        fetchQuestion();
      } else {
        navigate('/result', { state: { score } });
      }
    } catch (error) {
      console.error('Erro ao validar resposta', error);
    }
  };

  if (!question) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Carregando pergunta...</p>
      </Container>
    );
  }

  return (
    <Container className="text-center mt-5">
      <h2>{question.question}</h2>
      <Row className="mt-4">
        {question.wrongAnswers.concat([question.correctAnswer]).map((answer, index) => (
          <Col key={index} md={4} className="mb-3">
            <Button variant="secondary" onClick={() => handleAnswer(answer)} className="w-100">
              {answer}
            </Button>
          </Col>
        ))}
      </Row>
      <p>Pontuação: {score}</p>
    </Container>
  );
};

export default Game;
