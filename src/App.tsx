import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

const items = [
  { text: "1", position: { x: 0, y: 0 } },
  { text: "2", position: { x: "calc(-50% - 8px)", y: 0 } },
  { text: "3", position: { x: 0, y: "calc(-50% - 8px)" } },
  { text: "4", position: { x: "calc(-50% - 8px)", y: "calc(-50% - 8px)" } },
];

function App() {
  const [active, setActive] = useState<string>("");
  return (
    <div className="App">
      <ul className="gallery">
        {items.map((item, index) => (
          <Image
            setActive={setActive}
            active={active === item.text}
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

const Image = ({ item, active, setActive, position }: any) => {
  const handleClick = () => {
    setActive((prev: string) => (prev === item.text ? "" : item.text));
  };
  return (
    <>
      {!active ? (
        <li onClick={handleClick} className="gallery__item">
          <motion.div
            transition={{ bounce: false, duration: 0.2 }}
            className="image-container"
          >
            {item.text}
          </motion.div>
        </li>
      ) : (
        <li onClick={handleClick} className="gallery__item">
          <motion.div
            transition={{ bounce: false, duration: 0.2 }}
            animate={{
              width: "100%",
              x: position.x,
              y: position.y,
              zIndex: 1,
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
