import { useState } from "react";
export interface IProps {
  name: string;
  num: number;
}

function Hello({ name, num }: IProps) {
  const [data, setData] = useState(0);

  return (
    <h1>
      Hello {name} {num}
    </h1>
  );
}

export default Hello;
