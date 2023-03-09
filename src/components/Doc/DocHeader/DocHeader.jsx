import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import { AccountCircle } from "@mui/icons-material";
import { StyledText } from "../../../theme/commonStyles";
// import { asBlob } from "html-docx-js-typescript";
import htmlDocx from "html-docx-js/dist/html-docx";
// import { saveAs } from "file-saver";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import StateToPdfMake from "draft-js-export-pdfmake";
import { convertToRaw } from "draft-js";

const DocHeader = ({ noteState }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const saveAsDocHandler = () => {
    if (noteState.htmlContentState !== "") {
      const docx = htmlDocx.asBlob(noteState.htmlContentState);
      if (!docx) {
        console.error("Error generating Word document");
        return;
      }
      const url = URL.createObjectURL(docx);
      if (!url) {
        console.error("Error creating download link");
        return;
      }
      const link = document.createElement("a");
      link.href = url;
      link.download = "example.docx";
      link.click();
    } else {
      alert("The Note is empty hence can't be downloaded");
    }
  };

  const saveAsPdfHandler = () => {
    const rawContent = convertToRaw(noteState.editorState.getCurrentContent());
    const stateToPdfMake = new StateToPdfMake(rawContent);
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(stateToPdfMake.generate()).download(`test.pdf`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 1 }}>
              <ArticleIcon color="primary" sx={{ fontSize: 38 }} />
            </IconButton>
            <StyledText variant="body1">Untitled Doc</StyledText>
          </Stack>
          <Box flexGrow={1} textAlign="right">
            <Button variant="contained">Save</Button>
            <Button variant="contained" sx={{ ml: 3 }} onClick={handleClick}>
              Export
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem onClick={saveAsDocHandler}>Docx</MenuItem>
              <MenuItem onClick={saveAsPdfHandler}>Pdf</MenuItem>
            </Menu>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DocHeader;
