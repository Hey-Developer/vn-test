import { ContentState, convertFromHTML, EditorState } from "draft-js";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DocEditor from "../components/Doc/DocEditor/DocEditor";
import DocHeader from "../components/Doc/DocHeader/DocHeader";

let initialState = {
  htmlContentState: "",
  editorState: EditorState.createEmpty(),
};

const Doc = () => {
  const { state } = useLocation();

  const [noteState, setNoteState] = useState(() => {
    if (state) {
      const blocksFromHTML = convertFromHTML(state);
      const ediState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      return {
        htmlContentState: state,
        editorState: EditorState.createWithContent(ediState),
      };
    }
    return initialState;
  });
  return (
    <main>
      <DocHeader noteState={noteState} />
      <DocEditor noteState={noteState} setNoteState={setNoteState} />
    </main>
  );
};

export default Doc;
