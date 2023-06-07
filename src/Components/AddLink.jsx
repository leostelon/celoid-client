import { Box, Dialog } from "@mui/material";
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
        <Box>opened</Box>
      </Dialog>
    </div>
  );
}
