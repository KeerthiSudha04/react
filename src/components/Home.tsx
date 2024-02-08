import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Home: React.FC = () => {
  const Wrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
  return (
    <div>
      <Wrapper>
      <h1>Welcome to Home</h1>
      <Link to="/Async"><button >Async Component</button></Link>
      <Link to="/Loading">Lazy Loaded Component</Link>
      <div>
        <Link to="/Async" className="btn btn-primary">
          Async Component
        </Link>
      </div>
      </Wrapper>
    </div>
  );
};

export default Home;
