import React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import inlineCode from "@editorjs/inline-code";
import linkTool from "@editorjs/link";
import table from "@editorjs/table";
import Embed from "@editorjs/embed";
import codeBox from "@bomdi/codebox";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";

const Editor = ({ setData, currentData }) => {
  console.log(currentData);
  const editorRef = React.useRef();
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onChange: async () => {
        const data = await editor.saver.save();
        // console.log(data);
        setData(data);
      },
      onReady: () => {
        console.log("Editor.js is ready to work!");
        editorRef.current = editor;
      },
      data: currentData,
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
        quote: {
          class: Quote,
          inlineToolbar: true,
        },
        warning: Warning,
        codeBox: codeBox,
        inlineCode: inlineCode,
        linkTool: linkTool,
        delimiter: Delimiter,
        table: table,
        embed: Embed,
      },
    });
  };

  React.useEffect(() => {
    // if (editorRef.current === null) {
    initEditor();
    // }
    return () => {
      editorRef?.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return (
    <div className="">
      <div id="editorjs"></div>
    </div>
  );
};

export default Editor;
