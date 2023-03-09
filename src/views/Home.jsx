import { Button, Container, Divider, Paper } from "@mui/material";
import { Stack } from "@mui/material";
import React, { useRef } from "react";
import { StyledText } from "../theme/commonStyles";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import mammoth from "mammoth/mammoth.browser";

const Home = () => {
  const navigate = useNavigate();
  const inputFile = useRef(null);

  //@ Helpers func:
  const createNewDoc = () => {
    navigate(`/doc/${uuidv4()}`);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = async () => {
      const result = await mammoth.convertToHtml({
        arrayBuffer: reader.result,
      });
      navigate(`/doc/${uuidv4()}`, {
        state: result.value,
      });
    };
  };

  const importFromWord = () => {
    inputFile.current.click();
  };

  // code snippets:
  return (
    <Container p={5}>
      <StyledText variant="h5" textAlign="center" mt={4}>
        VN-Contract
      </StyledText>
      <Stack
        direction="row"
        textAlign="center"
        justifyContent="center"
        my={4}
        spacing={5}>
        <Paper>
          <input
            style={{ display: "none" }}
            accept=".doc,.docx"
            multiple
            type="file"
            ref={inputFile}
            onChange={handleFileChange}
            id="input-file"
          />
          <Button onClick={importFromWord}>Import Doc</Button>
        </Paper>
        <Paper>
          <Button onClick={createNewDoc}>Create New</Button>
        </Paper>
      </Stack>
      <Divider />
      <StyledText mt={4} variant="h6" clr="text3">
        Choose from some predefined template
      </StyledText>
    </Container>
  );
};

export default Home;
