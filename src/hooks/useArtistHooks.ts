import { CreateArtist } from "@/controller/artist";
import { ArtistProfile } from "@/types/interface";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";

export interface MusicLinkProps {
  name: string;
  link: string;
}

export interface SocialLinkProps {
  name: string;
  link: string;
}

export function useArtistFormUtils() {
  const [image, setImage] = useState<File | string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSocial, setIsOpenSocial] = useState(false);
  const [musicLinks, setMusicLinks] = useState<MusicLinkProps[]>([]);
  const [musicInput, setMusicInput] = useState({
    name: "",
    link: "",
  });
  const [socialLinks, setSocialLinks] = useState<MusicLinkProps[]>([]);
  const [socialInput, setSocialInput] = useState({
    name: "",
    link: "",
  });

  function handImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }
  const handleEditImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const mutation = useMutation({
    mutationFn: async (data: ArtistProfile) => await CreateArtist(data),
  });

  return {
    handImageChange,
    handleEditImage,
    socialInput,
    setMusicInput,
    socialLinks,
    setSocialLinks,
    setMusicLinks,
    setSocialInput,
    isOpenSocial,
    setIsOpenSocial,
    image,
    isOpen,
    setImage,
    setIsOpen,
    musicLinks,
    musicInput,
    fileInputRef,
    mutation,
  };
}
