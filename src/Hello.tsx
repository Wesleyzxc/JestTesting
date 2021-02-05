import { useState } from "react";
import { Pet } from "./models/Pet";
export interface IProps {
  name: string;
}

function Hello({ name }: IProps) {
  const tiger: Pet = { name: "Tiger", type: "cat", age: 2, breed: ["dsh", "tabbie"] };
  const lucky: Pet = { name: "Lucky", type: "cat", age: 2, breed: ["dsh", "ginger"] };

  const getAttribute = () => {
    return "bred" as keyof Pet;
  };

  const att: keyof Pet = getAttribute();

  const highlight = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.currentTarget.select();
  };

  const logTiger = (attribute: keyof Pet) => {
    console.log(tiger[attribute] + " years old");
  };

  return (
    <h1>
      Hello {name} <button onClick={() => logTiger(att)}>Tiger age</button> <input type="number" onClick={highlight} value="10" />
    </h1>
  );
}

export default Hello;
