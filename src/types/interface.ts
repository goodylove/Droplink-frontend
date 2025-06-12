import { Dispatch, SetStateAction } from "react";

export interface RegisterInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginInterface {
  email: string;
  password: string;
}

export interface User {
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;

  _id: string;
}
export interface UserContextType {
  user: User; // Replace 'any' with a more specific later
  isLoading: boolean;
  isError: boolean;
  handleLogout: () => void;
  // isAuthenticated: boolean;
}

export interface MusicLinkProps {
  name: string;
  link: string;
}

export interface MusicLinkComponentProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  musicLinks: MusicLinkProps[];
  musicInput: MusicLinkProps;
  setMusicLinks: Dispatch<SetStateAction<{ name: string; link: string }[]>>;
  setMusicInput: (value: MusicLinkProps) => void;
}

export interface SocialLinkComponentProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  socialLinks: MusicLinkProps[];
  socialInput: MusicLinkProps;
  setSocialLinks: Dispatch<SetStateAction<{ name: string; link: string }[]>>;
  setSocialInput: (value: MusicLinkProps) => void;
}
interface MusicLink {
  platform: string;
  url: string;
}

interface SocialLink {
  name: string;
  url: string;
}

export interface ArtistProfile {
  title: string;
  bio: string;
  username: string;
  links: MusicLink[];
  socials: SocialLink[];
}
