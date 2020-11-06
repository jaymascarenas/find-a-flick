import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MovieContext from "../utils/movieContext";
import Header from "./Header";
import Main from "./Main";
import MovieDetail from "./MovieDetail";
import Footer from "./Footer";
import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    searchMovies("The Matrix");
  }, []);

  const searchMovies = async (query) => {
    try {
      const res = await API.search(query);
      setResult(res.data);
    } catch (error) {
      console.log(
        "There was an error processing your results, please try again",
        error
      );
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchMovies(search);
  };

  return (
    <MovieContext.Provider
      value={{
        search,
        result,
        handleInputChange,
        handleFormSubmit,
      }}
    >
      <Layout>
        <Header />
        <Main>
          <MovieDetail />
        </Main>
        <Footer />
      </Layout>
    </MovieContext.Provider>
  );
};

export default OmdbContainer;
