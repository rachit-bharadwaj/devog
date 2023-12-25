"use client";

import { useEffect, useState } from "react";

import EditorJS from "@editorjs/editorjs";

import { editorTools } from "@/constants";

const TextEditor = () => {
  const [editorMounted, setEditorMounted] = useState(false);

  useEffect(() => {
    const initializeEditor = async () => {
      if (editorMounted) return;
      const editor = new EditorJS({
        holder: "textEditor",
        placeholder: "Let`s write an awesome story!",
        tools: editorTools,
      });

      setEditorMounted(true);
    };

    initializeEditor();
  }, [editorMounted]);

  return (
    <section>
      <div id="textEditor" className="border m-5 rounded p-3 cursor-text" />
    </section>
  );
};

export default TextEditor;
