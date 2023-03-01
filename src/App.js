import Button from "./Components/Button";
import Input from "./Components/Input";
import Card from "./Components/Card";
import React from "react";

function App() {
  const [movie, setMovie] = React.useState([]);
  const [params, setParams] = React.useState("");

  const getMovies = () => {
    // console.log(params);
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c5123a1&s=" + params)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setMovie(data.Search);
      });
    // console.log("Hello");
  };
  console.log(movie);

  return (
    <div className="w-full p-16 space-y-8">
      <h1 className="text-4xl">OMDB Movie</h1>
      <div className="space-x-5">
        <Input
          placeholder="Search Movie"
          onChangeProps={(e) => {
            setParams(e.target.value);
          }}
        ></Input>
        <Button disabled={false} onClick={() => getMovies()}>
          Search
        </Button>
      </div>
      <div className="w-full flex flex-wrap flex-row justify-around items-center gap-5">
        {movie ? (
          movie.map((e, i) => (
            <Card key={i}>
              <div className="w-full flex flex-col">
                <img src={e.Poster} alt="" />
                <h1 className="font-bold text-xl">{e.Title}</h1>
                <p className="text-gray-400 text-xs">{e.Year}</p>
              </div>
            </Card>
            // <p>{e.Title}</p>
            // console.log(e.Title);
          ))
        ) : (
          <h1>Data Tidak ditemukan</h1>
        )}
      </div>
    </div>
  );
}

export default App;
