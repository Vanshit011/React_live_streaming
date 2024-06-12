import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
    const [value, setValue] = useState("");

    const navigate = useNavigate();

    const navigateToRoom = () => {
        navigate(`/room/${value}`);
    };


    return (
        <>
            <Container>
                <Card>
                    <Title>Join Room</Title>
                    <Input
                        type="text"
                        placeholder="Enter room code"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button onClick={navigateToRoom} disabled={!value}>Join</Button>
                </Card>
            </Container>

        </>
    );
};

export default Home;