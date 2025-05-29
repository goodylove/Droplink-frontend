import { PiMusicNotesSimpleFill } from "react-icons/pi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdMobileScreenShare } from "react-icons/md";

interface Song {
  id: number;
  title: string;
  duration: string;
  audioUrl: string;
  coverUrl: string;
}

export const whatToDo = [
  {
    title: "Upload Your Tracks",
    description: "Add links to your music on Spotify,  Apple Music, and more",
    icon: PiMusicNotesSimpleFill,
  },

  {
    title: " Customize Your Page ",
    description: "Match your vibe with profile images, themes, and styles",
    icon: HiOutlineAdjustmentsHorizontal,
  },
  {
    title: " Share Anywhere",
    description: "One link to rule your socials, bios, and DMs",
    icon: MdMobileScreenShare,
  },
];

export const howItWorks = [
  {
    title: "Create Your Account",
    description: "Sign up with just your name and email.",
    id: 1,
  },
  {
    title: "Add Your Content",
    description: "Drop your streaming links, bio, and social handles.",
    id: 2,
  },
  {
    title: "Share Your DropLink",
    description:
      "Send it out, post it, and let fans find your music instantly.",
    id: 3,
  },
];

// Sample music data - replace with real data
export const songs: Song[] = [
  {
    id: 1,
    title: "Midnight Dreams",
    duration: "3:24",
    audioUrl: "/placeholder-audio.mp3",
    coverUrl: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    title: "Electric Pulse",
    duration: "4:12",
    audioUrl: "/placeholder-audio.mp3",
    coverUrl: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    title: "Neon Lights",
    duration: "3:45",
    audioUrl: "/placeholder-audio.mp3",
    coverUrl: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    title: "Digital Love",
    duration: "5:01",
    audioUrl: "/placeholder-audio.mp3",
    coverUrl: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    title: "Cosmic Journey",
    duration: "4:33",
    audioUrl: "/placeholder-audio.mp3",
    coverUrl: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 6,
    title: "Purple Rain Remix",
    duration: "3:58",
    audioUrl: "/placeholder-audio.mp3",
    coverUrl: "/placeholder.svg?height=60&width=60",
  },
];
