import { IconButton, Skeleton, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getLink, getLinksWithId } from "../database/link";

export default function Link() {
	const { id } = useParams();
	const [links, setLinks] = useState([]);
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	async function gLWId(id) {
		setLoading(true);
		const { user, links } = await getLinksWithId(id);
		setUser(user);
		setLinks(links);
		setLoading(false);
	}

	useEffect(() => {
		gLWId(id);
	}, [id]);

	return (
		<div>
			<MainContainer>
				{!loading && (
					<Box
						sx={{
							height: "100px",
							width: "100px",
							mt: 8,
						}}
					>
						<img
							src={
								user.profile_image ??
								"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
							}
							alt=""
							style={{
								width: "100%",
								height: "100%",
								borderRadius: "50px",
								objectFit: "cover",
							}}
						/>
					</Box>
				)}
				{!loading && (
					<Box
						sx={{
							pt: 3,
							fontSize: "20px",
							fontWeight: "500",
							mb: "16px",
							color: "white",
						}}
					>
						@{user.celo_id}
					</Box>
				)}

				{loading ? (
					<Box
						sx={{
							padding: { xs: "0 5%", sm: "0 10%", md: "0 20%" },
							width: "100%",
						}}
					>
						{Array.from({ length: 5 }).map((_, i) => (
							<Skeleton
								variant="rectangular"
								sx={{ my: 1, borderRadius: "8px" }}
								height={"125px"}
								key={i}
							/>
						))}
					</Box>
				) : (
					links.map((l, i) => (
						<LinkContainer
							key={i}
							onClick={async () => {
								await getLink(l.data.id);
								window.open(l.data.url, "_blank");
							}}
						>
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
							<Box>{l.data.title}</Box>
							<IconButton aria-label="share">
								<AiOutlineShareAlt />
							</IconButton>
						</LinkContainer>
					))
				)}
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
		"https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=720" +
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
