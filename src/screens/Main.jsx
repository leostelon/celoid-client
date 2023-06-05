import { Box, TextField } from "@mui/material";
import React from "react";

export default function Main() {
  return (
    <div>
      <Box sx={{ height: "100vh", width: "100vw", backgroundColor: "#502274" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#e9c0e9",

            py: 6,

            px: "15vw",
            fontSize: "55px",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Jumpstart Your corener of the internet today
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mr: 2 }}>
            <input
              type="text"
              placeholder="linktr.ee/yourname"
              style={{
                padding: "20px",
                fontSize: "20px",
                border: "none",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box>
            <button
              style={{
                padding: "20px",
                fontSize: "20px",
                fontWeight: "500",
                border: "none",
                borderRadius: "50px",

                backgroundColor: "#d2e823",
              }}
            >
              Claim your Linktree
            </button>
          </Box>
        </Box>

        <Box
          sx={{
            mx: "5vw",
            mt: 10,
            // mx: "10vw",
            backgroundColor: "#e9c0e9",
            position: "absolute",
            bottom: 0,
            height: "300px",
            width: "90%",

            borderTopLeftRadius: "60px",
            borderTopRightRadius: "60px",
          }}
        >
          <Box
            sx={{
              fontSize: "140px",
              fontWeight: "700",
              textAlign: "center",

              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              color: "#502274",

              height: "100%",

              pb: 3,

              //   borderTopLeftRadius: "20px",
              //   borderTopRightRadius: "20px",
            }}
          >
            Linktree*
          </Box>
        </Box>
      </Box>
    </div>
  );
}
