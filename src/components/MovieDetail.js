import React, { useContext } from "react";
import MovieContext from "../utils/movieContext";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const StyledMovieDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 40px;

    h3 {
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      text-align: center;
    }

    img {
      margin: 20px auto;
      max-width: 100%;
      height: auto;
    }
  }
  @media (max-width: 600px) {
    .card {
      width: 100%;
      border-radius: 0;
    }
  }
`;
const MovieDetail = () => {
  const {
    result: { Title, Poster, Director, Genre, Released },
  } = useContext(MovieContext);

  return (
    <StyledMovieDetail>
      <div className="card">
        {Title ? (
          <>
            <h1>{Title || "Search for a Movie to Begin"}</h1>
            <img alt={Title} src={Poster} />
            <h3>Director(s): {Director}</h3>
            <h3>Genre: {Genre}</h3>
            <h3>Released: {Released}</h3>
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
        <SearchForm />
      </div>
    </StyledMovieDetail>
  );
};

export default MovieDetail;
