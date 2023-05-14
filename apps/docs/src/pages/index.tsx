import { useEffect, useState } from "react";
import { Button } from "ui";
import { consolelog } from "logger";
import Link from "next/link";
import useStore from "store";
import { getCookie, setCookie } from "cookies-next";

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";

export default function Docs() {
  const [name, setName] = useState<string>("");
  const [response, setResponse] = useState<{ message: string } | null>(null);
  const [error, setError] = useState<string | undefined>();
  const increasePopulation = useStore((state) => state.increasePopulation);
  const bears = useStore((state) => state.bears);

  useEffect(() => {
    setResponse(null);
    setError(undefined);
    console.log(getCookie("key"));
    setCookie("key", 23);
  }, [name]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await fetch(`${API_HOST}/message/${name}`);
      const response = await result.json();
      setResponse(response);
      consolelog(response);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch response");
    }
  };

  const onReset = () => {
    setName("");
  };

  return (
    <div>
      <h1>Docs {bears}</h1>
      <button onClick={() => increasePopulation()}>+</button>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={onChange}
        ></input>
        <Button type="submit">Submit</Button>
      </form>
      <a href="/">web</a>
      <br />
      <a href="/about">about</a>
      {error && (
        <div>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}
      {response && (
        <div>
          <h3>Greeting</h3>
          <p>{response.message}</p>
          <Button onClick={onReset}>Reset</Button>
        </div>
      )}
    </div>
  );
}
