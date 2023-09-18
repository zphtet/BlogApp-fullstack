import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Code from "@editorjs/code";
import Quote from "@editorjs/quote";
import inlineCode from "@editorjs/inline-code";
import imageTool from "@editorjs/image";
import linkTool from "@editorjs/link";
import table from "@editorjs/table";
import simpleImage from "@editorjs/simple-image";
import rawTool from "@editorjs/raw";
import Embed from "@editorjs/embed";
const Editor = () => {
  console.log(window.location.origin);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onChange: async () => {
        const data = await editor.saver.save();
        console.log(data);
      },
      onReady: () => {
        console.log("Editor.js is ready to work!");
      },
      autofocus: true,
      placeholder: "write awesome blog post ! ",
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [2, 3, 4],
            defaultLevel: 3,
          },
        },
        code: Code,
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
        inlineCode: inlineCode,
        linkTool: linkTool,
        table: table,
        raw: rawTool,
        // image: simpleImage,
        embed: Embed,
        image: {
          class: imageTool,
          config: {
            endpoints: {
              byFile: `${window.location.origin}/blogImgs`, // Your backend file uploader endpoint
              byUrl: window.location.origin, // Your endpoint that provides uploading by Url
            },
          },
        },
      },
    });
  };

  React.useEffect(() => {
    initEditor();
  }, []);

  return (
    <>
      <div id="editorjs">Editor</div>
    </>
  );
};

export default Editor;
