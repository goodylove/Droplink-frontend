import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardLinks from "@/components/common/CardLinks";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SocialLinkProps {
  name: string;
  link: string;
}
function SocialLink() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [socialLinks, setsocialLinks] = React.useState<SocialLinkProps[]>([]);
  const [socialInput, setsocialInput] = React.useState({
    name: "",
    link: "",
  });

  function handleChangeMusicInput(event: React.ChangeEvent<HTMLInputElement>) {
    setsocialInput({
      ...socialInput,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="max-w-2xl mx-auto w-full bg-text p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold font-sans text-primary ">
        SOCIAL LINKS
      </h3>
      <CardLinks data={socialLinks} setData={setsocialLinks} />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <p className="text-accent underline text-sm font-sans cursor-pointer my-4">
            Click to add social link (e.g your instagram link)
          </p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md bg-background rounded-lg p-6 border border-primary ">
          <DialogHeader>
            <DialogTitle className="text-primary text-lg font-sans font-medium">
              Add Your Link
            </DialogTitle>
          </DialogHeader>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="name" className="text-white font-sans text-sm">
              Platform
            </Label>
            <Input
              name="name"
              id="name"
              placeholder="Spotify"
              className="py-4 text-white font-sans text-sm"
              value={socialInput.name}
              onChange={handleChangeMusicInput}
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="text-white font-sans text-sm">
                Link
              </Label>
              <Input
                name="link"
                value={socialInput.link}
                id="link"
                className="py-4 text-white font-sans text-sm"
                placeholder="https://open.spotify.com/artist/1234567890"
                onChange={handleChangeMusicInput}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-end">
            <Button
              type="button"
              variant="default"
              className="cursor-pointer"
              onClick={() => {
                if (socialInput.name && socialInput.link) {
                  setsocialLinks([...socialLinks, socialInput]);
                  setsocialInput({ name: "", link: "" });
                  setIsOpen(false);
                }
              }}
            >
              Add Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default SocialLink;
