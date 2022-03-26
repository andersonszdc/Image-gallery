import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

const items = [{ text: "1" }, { text: "2" }, { text: "3" }, { text: "4" }];

function App() {
  const [active, setActive] = useState<string>("");
  return (
    <div className="App">
      <ul className="gallery">
        {items.map((item, index) => (
          <Image
            setActive={setActive}
            active={active}
            item={item}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

const Image = ({ item, active, setActive }: any) => {
  const handleClick = () => {
    setActive((prev: string) => (prev === item.text ? "" : item.text));
  };
  return (
    <motion.li onClick={handleClick} className="gallery__item">
      <div className="image-container">{item.text}</div>
    </motion.li>
  );
};
