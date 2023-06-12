import "../styles/navbar.css";
import React, { useEffect, useState } from "react";
import { Box, Menu, MenuItem } from "@mui/material";
import { HiOutlineBell, HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { MdOutlinePersonOutline } from "react-icons/md";
import NoProfilePicture from "../assets/default-profile-icon.png";
import { getShortAddress } from "../utils/addressShort";

export const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	const username = localStorage.getItem("address");
	const [connectedToSite, setConnectedToSite] = useState(false);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	async function connectSite() {
		let token = localStorage.getItem("token");
		if (!token || token === "" || token === "undefined") {
			setConnectedToSite(false);
			return navigate("/welcome");
		}
		setConnectedToSite(true);
	}

	useEffect(() => {
		connectSite();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				borderBottom: "1px solid #f5f5f5",
			}}
		>
			<div className="navbar">
				<div>
					<h1>Celinks🌴</h1>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Box
						mr={3}
						sx={{ display: "flex", position: "relative", cursor: "pointer" }}
						id="sdk-trigger-id"
					>
						<HiOutlineBell size={24} color="#828488" />
						<Box
							sx={{
								position: "absolute",
								color: "red",
								size: "50px",
								top: "-8px",
								right: 0,
							}}
						>
							●
						</Box>
					</Box>
					{!connectedToSite ? (
						<Box onClick={connectSite} className="upload-button">
							Connect Wallet
						</Box>
					) : (
						<Box>
							<Box display="flex" alignItems={"center"}>
								<Box
									sx={{
										backgroundImage: `url("${NoProfilePicture}")`,
										backgroundPosition: "center",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
									}}
									className="profile-icon"
									onClick={handleClick}
								></Box>
								<Box sx={{ fontWeight: "bold", ml: "6px" }}>
									{getShortAddress(username)}
								</Box>
							</Box>
							<Menu
								sx={{ top: "4px" }}
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
							>
								<MenuItem
									onClick={() => {
										const address = localStorage.getItem("address");
										navigate("/profile/" + address);
										setAnchorEl(null);
									}}
								>
									<MdOutlinePersonOutline color="#828488" size={20} />
									<p
										style={{
											fontSize: "14px",
										}}
									>
										Change Profile
									</p>
								</MenuItem>
								<MenuItem
									onClick={() => {
										localStorage.clear();
										window.location.replace("/");
										setAnchorEl(null);
									}}
								>
									<HiOutlineLogout
										color="#828488"
										size={20}
										onClick={() => {
											localStorage.clear();
											window.location.replace("/");
											setAnchorEl(null);
										}}
									/>
									&nbsp;
									<p
										style={{
											fontSize: "14px",
										}}
									>
										Logout
									</p>
								</MenuItem>
							</Menu>
						</Box>
					)}
				</div>
			</div>
		</Box>
	);
};
