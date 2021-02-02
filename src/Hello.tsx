import { useState } from "react";
export interface IProps {
  name: string;
<<<<<<< HEAD
  num: number;
}

function Hello({ name, num }: IProps) {
  const [data, setData] = useState(0);

  return (
    <h1>
      Hello {name} {num}
    </h1>
  );
=======
}

function Hello({ name }: IProps) {
  const [data, setData] = useState(0);

  return <h1>Hello {name} </h1>;
>>>>>>> 4b94173919cfb73cf9a0c2db94bae9e0fb3cf825
}

export default Hello;
