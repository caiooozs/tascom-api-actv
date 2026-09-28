import type { CharactersProps } from "../../types/types";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function CharactersCard({ image, name }: CharactersProps) {
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={image} alt="" className="w-96" />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
