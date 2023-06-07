import { Box, CircularProgress, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import { create } from "../api/contract";
import { connectWalletToSite, getWalletAddress } from "../utils/wallet";
import { createUser } from "../database/user";
import { toast } from "react-toastify";

export default function Main() {
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const [connectedToSite, setConnectedToSite] = useState(false);

  async function createNFT() {
    if (!name || name === "") toast("Enter your unique Celo ID");
    setLoading(true);
    await create(name);
    toast("Successfully created a CELO ID🥳", { type: "success" });
    setName("");
    setLoading(false);
  }

  async function connectSite() {
    await connectWalletToSite();
    const address = await getWalletAddress();
    if (address && address !== "") {
      let token = localStorage.getItem("token");
      localStorage.setItem("address", address);
      if (!token || token === "" || token === "undefined") {
        await createUser(address);
      }
      token = localStorage.getItem("token");
      if (token && token !== "" && token !== "undefined") {
        setConnectedToSite(true);
      }
    }
  }

  useEffect(() => {
    connectSite();
  }, []);

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
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ mr: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <Box>linktr.ee/</Box>
              <Box sx={{ paddingTop: "3px" }}>
                <InputBase
                  type="text"
                  placeholder="yourname"
                  style={{
                    fontSize: "19px",
                  }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <button
              style={{
                padding: loading ? "10px" : "20px",
                fontSize: "20px",
                fontWeight: "500",
                border: "none",
                borderRadius: "50px",
                minWidth: "150px",
                backgroundColor: "#d2e823",
                cursor: "pointer",
              }}
              onClick={createNFT}
            >
              {loading ? (
                <CircularProgress sx={{ color: "white" }} size={32} />
              ) : (
                "Claim your Linktree"
              )}
            </button>
          </Box>
        </Box>
        <Box
          sx={{
            mx: "5vw",
            mt: 10,
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
            }}
          >
            Linktree*
          </Box>
        </Box>
      </Box>
    </div>
  );
}
