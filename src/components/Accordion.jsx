import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("Accordion related components must be wrapped by <Accordion>");
  }

  return ctx;
}

function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevItem) => (prevItem === id ? null : id));
  }

  const contextValue = {
    openItemId: openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

export default Accordion;
