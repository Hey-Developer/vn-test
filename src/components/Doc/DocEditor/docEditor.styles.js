export const styles = (theme) => ({
  editorToolbar: {
    display: "flex",
    position: "sticky",
    top: "0",
    zIndex: "50",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  editorWrapper: {
    padding: "1.25rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1.5rem",
    marginBottom: "3rem",
    backgroundColor: "#ffffff",
    maxWidth: "64rem",
    borderRadius: "0.125rem",
    borderWidth: "2px",
    borderColor: "#D1D5DB",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  imagePopup: {
    left: 0,
    transform: "translateX(-50%) !important",
  },
});
