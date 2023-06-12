import { pinFileToIPFS } from "../api/nftStorage";

const { db } = require(".");

const collectionReference = db.collection("Link");

export async function createLink(url, title) {
    try {
        const address = localStorage.getItem("address");

        const response = await collectionReference.create([
            url, title, address
        ]);

        return response.data;
    } catch (err) {
        console.log(err.message)
    }
}

export async function getLinks() {
    try {
        const address = localStorage.getItem("address");

        const response = await collectionReference.where("user", "==", address).sort("timestamp", "desc").get();

        return response.data;
    } catch (err) {
        console.log(err.message)
    }
}

export async function updateImage(id, image) {
    try {
        const imageUrl = await pinFileToIPFS(image)
        const response = await collectionReference.record(id).call("updateImage", [imageUrl]);

        return response;
    } catch (err) {
        console.log(err.message)
    }
}

export async function updateUrl(id, url) {
    try {
        const response = await collectionReference.record(id).call("updateURL", [url]);

        return response;
    } catch (err) {
        console.log(err.message)
    }
}

export async function updateTitle(id, title) {
    try {
        const response = await collectionReference.record(id).call("updateTitle", [title]);

        return response;
    } catch (err) {
        console.log(err.message)
    }
}