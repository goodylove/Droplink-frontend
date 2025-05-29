"use client";

import { songs } from "@/constants/data";
import { Pause, Play, Share2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface SingleArtistTemplateProps {
  username: string;
}

function SingleArtistTemplate({ username }: SingleArtistTemplateProps) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playPreview = (songId: number, audioUrl: string) => {
    // Stop current audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If clicking the same song that's playing, stop it
    if (currentlyPlaying === songId && isPlaying) {
      setCurrentlyPlaying(null);
      setIsPlaying(false);
      return;
    }

    // Create new audio element and play
    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.play().catch(() => {
      // Handle audio play error (e.g., no audio file)
      console.log("Audio playback failed - using placeholder");
    });

    setCurrentlyPlaying(songId);
    setIsPlaying(true);

    // Stop after 10 seconds
    timeoutRef.current = setTimeout(() => {
      audio.pause();
      setCurrentlyPlaying(null);
      setIsPlaying(false);
    }, 10000);

    // Handle audio end
    audio.onended = () => {
      setCurrentlyPlaying(null);
      setIsPlaying(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center pb-8 md:p-6 bg-gradient-to-br from-black  via-primary   to-accent">
      <div className="bg-black backdrop-blur-sm border-b border-purple-500/20 w-full  ">
        <div className="container w-full px-4 py-4">
          <div className="flex items-center justify-between">
            {/* <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white"></span>
            </div> */}
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="logo" width={30} height={30} />
              <span className="ml-1 text-2xl font-bold font-poppins md:text-text text-primary ">
                DropLink
              </span>
            </div>
            <div className="flex items-center space-x-4">
              {/* <button className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/30 transition-colors">
                <Heart className="h-5 w-5 text-purple-400" />
              </button> */}
              <button className="p-2 rounded-full bg-purple-600/20 hover:bg-purple-600/30 transition-colors">
                <Share2 className="h-5 w-5 text-purple-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Artist Image */}
      <div className="w-32 h-32 rounded-md overflow-hidden mt-5 shadow-lg">
        <Image
          width={128}
          height={128}
          src="/images/unnamed.jpg"
          alt={`${username}'s avatar`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Username */}
      <h1 className="mt-4 text-2xl font-bold text-accent font-sans ">
        {username.toLocaleUpperCase()}
      </h1>

      {/* Music Links */}
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-black  mb-4  text-center">
          Music title
        </h2>
        {/* <ul className="space-y-3 px-3">
          {songs.map((link, index) => (
            <li key={index}>
              <Button
                className={`block w-full text-center bg-background text-white h-20 rounded-lg shadow hover:bg-blue-600 transition relative 
               `}
              >
                {link.title}
              </Button>
            </li>
          ))}
        </ul> */}

        <div className="space-y-3 px-2">
          {songs.map((song) => (
            <div
              key={song.id}
              className={`group flex items-center space-x-8 p-3 bg-background rounded-xl transition-all duration-300 cursor-pointer ${
                currentlyPlaying === song.id
                  ? "bg-purple-600/30 border border-purple-500/50"
                  : "hover:bg-purple-600/10 border border-transparent hover:border-purple-500/30"
              }`}
              onClick={() => playPreview(song.id, song.audioUrl)}
            >
              {/* Track Number / Play Button */}
              <div className="w-12 h-12 flex items-center justify-center">
                {currentlyPlaying === song.id && isPlaying ? (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Pause className="h-4 w-4 text-white" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-lg overflow-hidden border border-purple-500/30">
                    <Image
                      src={song.coverUrl || "/placeholder.svg"}
                      alt={song.title}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {currentlyPlaying !== song.id && (
                  <div className="hidden group-hover:flex w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full items-center justify-center">
                    <Play className="h-4 w-4 text-white ml-0.5" />
                  </div>
                )}
              </div>

              {/* Song Info */}
              <div className="flex-1 min-w-0">
                <h3
                  className={`font-semibold truncate ${
                    currentlyPlaying === song.id
                      ? "text-purple-300"
                      : "text-white"
                  }`}
                >
                  {song.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleArtistTemplate;
