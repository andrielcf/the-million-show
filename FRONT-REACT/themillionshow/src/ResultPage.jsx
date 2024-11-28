import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const ResultPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const restartGame = () => {
    navigate('/');
  };

  return (
    <Container className="text-center mt-5">
      <h1>Fim de Jogo</h1>
      <p>Sua pontuação foi: {state.score}</p>
      <Button variant="primary" onClick={restartGame}>
        Reiniciar
      </Button>
    </Container>
  );
};

export default ResultPage;
