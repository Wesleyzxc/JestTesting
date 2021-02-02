import { useState } from "react";
export interface IProps {
  name: string;
}

function Hello({ name }: IProps) {
  const [data, setData] = useState(0);

  return <h1>Hello {name} </h1>;
}

export default Hello;
