import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

const items = [
  { text: "1", position: { x: 0, y: 0 }, color: "#a03e99" },
  {
    text: "2",
    position: { x: "calc(-50% - 8px)", y: 0 },
    color: "#f59ca9",
  },
  {
    text: "3",
    position: { x: 0, y: "calc(-50% - 8px)" },
    color: "#f6828c",
  },
  {
    text: "4",
    position: { x: "calc(-50% - 8px)", y: "calc(-50% - 8px)" },
    color: "#df57bc",
  },
];

function App() {
  const [active, setActive] = useState<string>("");
  const [last, setLast] = useState<string>("");
  return (
    <div className="App">
      {active ? (
        <motion.div
          animate={{
            backgroundColor: items[parseInt(active) - 1].color,
            zIndex: 1,
          }}
          className="overlay"
          transition={{ bounce: false, duration: 0.2 }}
        />
      ) : (
        <motion.div
          animate={{ backgroundColor: "#371e30" }}
          className="overlay"
          transition={{ bounce: false, duration: 0.2 }}
        />
      )}
      <ul className="gallery">
        {items.map((item, index) => (
          <Image
            last={last}
            setLast={setLast}
            setActive={setActive}
            active={active}
            item={item}
            key={index}
            position={item.position}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

const Image = ({ item, active, setActive, position, setLast, last }: any) => {
  const handleClick = () => {
    setActive((prev: string) => (prev === item.text ? "" : item.text));
    setLast(item.text);
  };
  return (
    <>
      {active !== item.text ? (
        <li onClick={handleClick} className="gallery__item">
          <motion.div
            animate={{
              width: "calc(50% - 8px)",
              opacity: active ? 0 : 1,
              zIndex: item.text === last ? 2 : 1,
            }}
            transition={{ bounce: false, duration: 0.4 }}
            className="image-container"
          >
            {item.text}
          </motion.div>
        </li>
      ) : (
        <li onClick={handleClick} className="gallery__item">
          <motion.div
            transition={{ bounce: false, duration: 0.4 }}
            animate={{
              width: "100%",
              x: position.x,
              y: position.y,
              zIndex: 2,
              color: item.color,
            }}
            className="image-container"
          >
            {item.text}
          </motion.div>
        </li>
      )}
    </>
  );
};
