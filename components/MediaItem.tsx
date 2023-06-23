import useLoadImage from "@/hooks/useLoadImage";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  onClick: (id: string) => void;
  data: Song;
};

const MediaItem = ({ onClick, data }: Props) => {
  const player = usePlayer();
  const imageUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) return onClick(data.id);

    return player.setId(data.id);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={imageUrl || "/images/liked.png"}
          alt="song image"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
