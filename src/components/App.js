import { response } from "msw";
import { useEffect, useState } from "react";

function App() {
  const [dogPhoto, setDogPhoto] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPhoto(data.message);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <p>Loading...</p>;
  return (
    <>
      <img src={dogPhoto} alt="A Random Dog" />
    </>
  );
}

export default App;
