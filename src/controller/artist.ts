import { ArtistProfile } from "@/types/interface";
import API from "./aixosInstance";

export async function CreateArtist(reqData: ArtistProfile) {
  try {
    const response = await API.post("/artist", reqData);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}
