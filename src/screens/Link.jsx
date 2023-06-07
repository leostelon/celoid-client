import { IconButton, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";

export default function Link() {
  return (
    <div>
      <MainContainer>
        <Box
          sx={{
            height: "100px",
            width: "100px",
            mt: 8,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50px",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box
          sx={{
            pt: 3,
            fontSize: "20px",
            fontWeight: "500",
            mb: "16px",
            color: "white",
          }}
        >
          @ harry231
        </Box>

        <LinkContainer>
          <LinkImg>
            <img
              src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50px",
                objectFit: "cover",
              }}
            />
          </LinkImg>
          <Box>Tony Hawk's Vert Alert</Box>
          <IconButton aria-label="share">
            <AiOutlineShareAlt />
          </IconButton>
        </LinkContainer>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled(Box)({
  height: "100vh",
  width: "100vw",

  backgroundColor: "#20313A",
  backgroundImage:
    "url(" +
    "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
    ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  //   justifyContent: "center",
});

const LinkContainer = styled(Box)({
  width: "80%",
  maxWidth: "990px",
  border: "2px solid rgb(0, 0, 0)",
  boxShadow: "rgb(0, 0, 0) 8px 8px 0px 0px",
  color: "rgb(0, 0, 0)",
  backgroundColor: "rgb(255, 254, 254)",

  borderRadius: "30px",

  textAlign: "center",
  padding: "10px 18px",

  marginBottom: "16px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const LinkImg = styled(Box)({
  width: "50px",
  height: "50px",
});
