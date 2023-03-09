import { Box } from "@mui/material";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { styles } from "./docEditor.styles";
import useStyles from "../../../hooks/useStyles";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";

const DocEditor = ({ noteState, setNoteState }) => {
  const classes = useStyles(styles);
  return (
    <Box>
      <Editor
        editorState={noteState.editorState}
        onEditorStateChange={(state) => {
          const contentState = noteState.editorState.getCurrentContent();
          setNoteState({
            editorState: state,
            htmlContentState: draftToHtml(convertToRaw(contentState)),
          });
        }}
        toolbarClassName={classes.editorToolbar}
        editorClassName={classes.editorWrapper}
        editorStyle={{ minHeight: "1300px" }}
        toolbar={{
          image: {
            popupClassName: classes.imagePopup,
          },
          embedded: {
            popupClassName: classes.imagePopup,
          },
          emoji: {
            popupClassName: classes.imagePopup,
          },
        }}
      />
    </Box>
  );
};

export default DocEditor;
