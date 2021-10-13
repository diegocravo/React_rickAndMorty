import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CharCard from "../CharCard";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function Search() {
  const { value } = useSelector((state) => state.search);

  const [characterList, setCharacterList] = useState([]);
  const [pagination, setPagination] = useState([]);

  const nextPage = () => {
    axios
      .get(`${pagination.next}`)
      .then((response) => {
        setCharacterList(response.data.results);
        setPagination(response.data.info);
        console.log(response.data.info);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const prevPage = () => {
    axios
      .get(`${pagination.prev}`)
      .then((response) => {
        setCharacterList(response.data.results);
        setPagination(response.data.info);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${value}`)
      .then((response) => {
        setCharacterList(response.data.results);
        setPagination(response.data.info);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [value]);

  return (
    <div>
      <h1 style={{ color: "white" }}>Showing Results for "{value}"</h1>

      <div style={{ marginTop: "20px" }}>
        <Container
          maxWidth="lg"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridGap: "10px",
          }}
        >
          {characterList.map((chars, id) => {
            return <CharCard key={id} chars={chars} />;
          })}
        </Container>
      </div>
      <div style={{ padding: "20px" }}>
        {pagination.prev ? (
          <Button
            style={{ margin: "10px" }}
            onClick={prevPage}
            variant="contained"
            color="secondary"
          >
            ANTERIOR
          </Button>
        ) : (
          <Button style={{ margin: "10px" }} variant="contained" disabled>
            ANTERIOR
          </Button>
        )}

        {pagination.next ? (
          <Button
            style={{ margin: "10px" }}
            onClick={nextPage}
            variant="contained"
            color="secondary"
          >
            PROXIMO
          </Button>
        ) : (
          <Button style={{ margin: "10px" }} variant="contained" disabled>
            PROXIMO
          </Button>
        )}
      </div>
    </div>
  );
}
