import React, {  createContext, ReactElement, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ChildrenProps {
  onClick: () => void;
}
const DialogContext = createContext<{
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}>({
  name: "",
  setName: () => {
    return;
  },
});

function Dialog({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState<string>("");
  return (
    <DialogContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

function Trigger({ name, children }: { name: string; children: React.ReactNode }) {
  const { setName } = useDialog();

  function handleClick() {
    setName(name);
  }

    if(React.isValidElement(children))
  return React.cloneElement(children as ReactElement<ChildrenProps>, { onClick: handleClick });
}

function Content({ name, className, children }: { name: string; className?: string; children: React.ReactNode }) {
  const { name: dialogName, setName } = useDialog();
  useEffect(() => {
    if (dialogName === name) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [dialogName, name]);
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setName("");
    }
    if (dialogName === name) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dialogName, name, setName]);
  if (dialogName !== name) return null;

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) setName("");
  }

  return createPortal(
    <div className="fixed inset-0 z-10 bg-black bg-opacity-50" onClick={handleClick}>
      <div className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-lg bg-white ${className}`}>{children}</div>
    </div>,document.body
  );
}

Dialog.Trigger = Trigger;
Dialog.Content = Content;

export default Dialog;

function useDialog() {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}
