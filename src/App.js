import "./App.css";
import "./styles/navbar.css";

// import { Box } from "@mui/material";
// import { useEffect, useState } from "react";
// import { WelcomeScreen } from "./screens/Welcome";
// import { connectWalletToSite, getWalletAddress } from "./utils/wallet";
// import { BsPerson } from "react-icons/bs";
// import { createUser } from "./api/user";
import Main from "./screens/Main";

function App() {
  // const [connectedToSite, setConnectedToSite] = useState(false);
  // const [isWelcomeScreen, setIsWelcomeScreen] = useState(false);

  // async function connectSite() {
  //   await connectWalletToSite();
  //   const address = await getWalletAddress();
  //   if (address && address !== "") {
  //     const token = localStorage.getItem("token");
  //     if (!token || token === "") {
  //       await createUser(address);
  //       setConnectedToSite(true);
  //     }
  //   }
  // }

  // function onCloseWelcome() {
  //   setIsWelcomeScreen(false);
  // }

  // useEffect(() => {
  //   const isWelcome = localStorage.getItem("welcome");
  //   if (isWelcome !== "true") {
  //     setIsWelcomeScreen(true);
  //   }
  //   connectSite();
  // }, []);

  return (
    <div className="App">
      <Main />

      {/* {isWelcomeScreen ? (
        <WelcomeScreen onCloseWelcome={onCloseWelcome} />
      ) : (<div className="App">
        <div className="navbar">
          <div>
            <h2>⚡Dedocker</h2>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {!connectedToSite ? <Box onClick={connectSite} className="upload-button">
              Connect Wallet
            </Box> : <Box className="profile-icon">
              <BsPerson size={30} /> </Box>}
          </div>
        </div>
      </div>)} */}
    </div>
  );
}

export default App;
