import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="text-center mt-5">
      <h1>Show do Milhão</h1>
      <Button variant="primary" onClick={startGame} className="mt-3">
        Iniciar Jogo
      </Button>
    </div>
  );
};

export default Home;
