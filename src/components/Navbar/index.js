import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../../redux/char";
import { Button, TextField } from "@material-ui/core";

export default function NavBar() {
  let history = useHistory();

  const [nome, setNome] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(" cliquei");
    dispatch(setName(nome));
    setNome("");
    history.push("/search");
  };

  const handleHome = () => {
    history.push("/home");
  };

  const handleValue = (e) => {
    setNome(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{ display: "flex", paddingLeft: "20px" }}
        onClick={handleHome}
      >
        <h1>Rick and Morty API</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          color="secondary"
          onChange={handleValue}
          value={nome}
        />
        <Button
          style={{ margin: "20px", height: "55px" }}
          onClick={handleClick}
          variant="contained"
          color="secondary"
        >
          Search
        </Button>
      </div>
    </div>
  );
}
