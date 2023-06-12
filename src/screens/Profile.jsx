import {
	Box,
	Button,
	IconButton,
	InputBase,
	Skeleton,
	Switch,
	styled,
} from "@mui/material";

import { MdDeleteOutline, MdOutlineImage } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { deepPurple, purple } from "@mui/material/colors";
import { useEffect, useState } from "react";
import AddLink from "../Components/AddLink";
import { Navbar } from "../Components/Navbar";
import { getLinks } from "../database/link";

export default function Profile() {
	const [openAddLink, setOpenAddLink] = useState(false);
	const [links, setLinks] = useState([]);
	const [loading, setLoading] = useState(false);

	async function gL() {
		setLoading(true)
		const response = await getLinks();
		setLinks(response);
		setLoading(false)
	}

	useEffect(() => {
		gL();
	}, []);

	return (
		<div>
			<MainContainer sx={{ padding: { xs: "0 5%", sm: "0 10%", md: "0 20%" } }}>
				<Navbar />
				{openAddLink && (
					<AddLink
						isOpen={openAddLink}
						handleExternalClose={() => setOpenAddLink(false)}
					/>
				)}
				<Holder>
					<ColorButton
						variant="contained"
						startIcon={<AiOutlinePlus />}
						sx={{}}
						onClick={() => {
							setOpenAddLink(true);
						}}
					>
						Add Link
					</ColorButton>
					{loading
						? Array.from({ length: 5 }).map((_, i) => (
								<Skeleton
									variant="rectangular"
									sx={{ my: 1, borderRadius: "8px" }}
									height={"125px"}
									key={i}
								/>
						  ))
						: links.map((a, i) => (
								<LinkCont key={i}>
									<LinkDescription>
										<Box sx={{ paddingLeft: "10px" }}>
											<Box>
												<InputBase
													sx={{
														fontSize: "16px",
														fontWeight: "bold",
													}}
													value={a.data.title}
													inputProps={{ "aria-label": "Twitter" }}
												/>
											</Box>
											<Box sx={{ fontSize: "16px" }}>
												<InputBase
													sx={{
														fontSize: "16px",
														width: "100%",
													}}
													value={a.data.url}
													inputProps={{ "aria-label": "Twitter" }}
												/>
											</Box>
										</Box>
										<Box>
											<IOSSwitch defaultChecked />
										</Box>
									</LinkDescription>
									<LinkDescription>
										<Box sx={{ display: "flex", alignItems: "center" }}>
											<IconButton aria-label="delete">
												<MdOutlineImage />
											</IconButton>
											<Box>{a.data.clicks} clicks</Box>
										</Box>
										<Box>
											<IconButton aria-label="delete">
												<MdDeleteOutline />
											</IconButton>
										</Box>
									</LinkDescription>
								</LinkCont>
						  ))}
				</Holder>
			</MainContainer>
			{openAddLink && (
				<AddLink
					isOpen={openAddLink}
					handleExternalClose={() => setOpenAddLink(false)}
				/>
			)}
		</div>
	);
}

const MainContainer = styled(Box)({
	backgroundColor: "#f3f3f1",
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	minHeight: "100vh",
});

const Holder = styled(Box)({
	maxWidth: "990px",
	"@media only screen and (max-width: 400px)": {
		width: "99%",
	},

	//   padding: "20px",

	"@media only screen and (max-width: 335px)": {
		padding: "5px",
	},
});

const LinkCont = styled(Box)({
	width: "100%",
	height: "140px",
	backgroundColor: "#ffffff",

	borderRadius: "20px",
	padding: "20px",

	marginBottom: "16px",
});
const LinkDescription = styled(Box)({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	flexWrap: "wrap",
});

const ColorButton = styled(Button)(({ theme }) => ({
	color: theme.palette.getContrastText(purple[500]),
	backgroundColor: deepPurple[500],
	"&:hover": {
		backgroundColor: deepPurple[700],
	},
	width: "100%",
	margin: "16px 0",
	borderRadius: "28px",
	padding: "12px",
	fontSize: "16px",
	fontWeight: "600",
}));

const IOSSwitch = styled((props) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	"& .MuiSwitch-switchBase": {
		padding: 0,
		margin: 2,
		transitionDuration: "300ms",
		"&.Mui-checked": {
			transform: "translateX(16px)",
			color: "#fff",
			"& + .MuiSwitch-track": {
				backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
				opacity: 1,
				border: 0,
			},
			"&.Mui-disabled + .MuiSwitch-track": {
				opacity: 0.5,
			},
		},
		"&.Mui-focusVisible .MuiSwitch-thumb": {
			color: "#33cf4d",
			border: "6px solid #fff",
		},
		"&.Mui-disabled .MuiSwitch-thumb": {
			color:
				theme.palette.mode === "light"
					? theme.palette.grey[100]
					: theme.palette.grey[600],
		},
		"&.Mui-disabled + .MuiSwitch-track": {
			opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
		},
	},
	"& .MuiSwitch-thumb": {
		boxSizing: "border-box",
		width: 22,
		height: 22,
	},
	"& .MuiSwitch-track": {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
		opacity: 1,
		transition: theme.transitions.create(["background-color"], {
			duration: 500,
		}),
	},
}));
