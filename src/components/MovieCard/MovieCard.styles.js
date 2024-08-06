import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  margin: 16px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  .MuiCard-root {
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  .MuiCardContent-root {
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .movie-title {
    font-weight: 600;
    font-size: 1.25rem;
    color: #333;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .movie-rating {
    font-size: 1rem;
    color: #666;
  }
`;
