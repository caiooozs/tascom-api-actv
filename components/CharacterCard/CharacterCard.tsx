import type { CharactersProps } from "../../types/types";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function CharactersCard({
  image,
  name,
  gender,
  location,
  species,
  status,
  type,
}: CharactersProps) {
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <div className="flex flex-col items-start text-xl font-semibold">
                {name}
                <span className="opacity-60 text-sm font-light">
                  {species} | {gender}
                </span>
              </div>
              <div>
                <Badge variant="outline">{status.toUpperCase()}</Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <img src={image} alt="" className="w-48" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Informations</h1>
              <ul>
                <li>{location.name}</li>
                <li>{type}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
