import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import { editorFactory } from "./Utils";

const Editor = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const editorInstance = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (container.current) {
      editorInstance.current = editorFactory({ holder: container.current });
    }
  }, []);

  return <div ref={container} />;
};

export default Editor;
