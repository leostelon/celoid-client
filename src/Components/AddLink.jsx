import { Box, Dialog, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function AddLink({ isOpen, handleExternalClose }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    if (handleExternalClose) {
      handleExternalClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <div>
      <Dialog open={open} minWidth="md" onClose={handleClose}>
        <Box
          sx={{
            p: 2,
            textAlign: "center",
            width: "100%",
            maxWidth: "350px",
          }}
        >
          <h2>Add New Link</h2>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <TextField
              id="LinkTitle"
              label="Title"
              variant="outlined"
              size="small"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <TextField id="Link" label="Link" variant="outlined" size="small" />
          </FormControl>
        </Box>
      </Dialog>
    </div>
  );
}
