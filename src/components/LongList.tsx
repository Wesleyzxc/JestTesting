import { useEffect, useRef } from "react";

interface Props {
  list: string[];
  ref: any;
}

const LongList = ({ list, ref }: Props) => {
  const ulRef = useRef<HTMLUListElement>(null);

  const scrollToTop = () => {
    if (ulRef.current) ulRef.current.scrollTop = 0;
  };
  useEffect(() => {
    scrollToTop();
  });
  return (
    <ul className="list-overflow" ref={ulRef}>
      {list.map((item: string) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default LongList;
