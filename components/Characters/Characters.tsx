import { useEffect, useState } from "react";
import { api } from "../../src/api/api";
import CharactersCard from "../CharacterCard/CharacterCard";
import type { CharactersProps } from "../../types/types";

export default function Characters() {
  const [data, setData] = useState<CharactersProps[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true);
        const res = await api.get("/character");
        setData(res.data.results);
      } catch (error) {
        setError("Falha ao consultar os dados.");
      } finally {
        setLoading(false);
      }
    }
    getCharacters();
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {loading && <div className="">Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {data?.map((ch) => (
          <div key={ch.id}>
            <CharactersCard
              gender={ch.gender}
              image={ch.image}
              location={ch.location}
              origin={ch.origin}
              species={ch.species}
              status={ch.status}
              type={ch.type}
              name={ch.name}
              id={ch.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}
