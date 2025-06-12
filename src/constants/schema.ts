import { z } from "zod";
// const MusicLinkSchema = z.object({
//   name: z.string().min(1),
//   link: z.string().url(),
// });
// const SocialLinkSchema = z.object({
//   name: z.string().min(1),
//   link: z.string().url(),
// });

export const ArtistSchema = z.object({
  title: z.string({
    message: "Your title is required",
  }),
  bio: z.string({
    message: "your bio is required",
  }),
  username: z.string({
    message: " username is required",
  }),
  // links: z.array(MusicLinkSchema),
  // socials: z.array(SocialLinkSchema),
});
