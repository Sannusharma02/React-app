import { useState } from "react";

interface Props {
  item: string[];
  heading: string;
  onSelectitem: (item: string) => void;
}

function ListGroup({ item, heading, onSelectitem }: Props) {
  const getMessage = () => {
    return item.length === 0 && <p> No item found</p>;
  };

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> {heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {item.map((it, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={it}
            onClick={() => {
              setSelectedIndex(index);
              onSelectitem(it);
            }}
          >
            {it}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
