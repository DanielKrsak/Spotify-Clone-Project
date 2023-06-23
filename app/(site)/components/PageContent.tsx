"use client";

import { Song } from "@/types";
import SongItem from "../../../components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";

type Props = {
  songs: Song[];
};

const PageContent = ({ songs }: Props) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No Songs Available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 mt-4 gap-x-4">
      {songs.map((item) => (
        <SongItem
          key={item.id}
          onClick={(id: string) => onPlay(id)}
          data={item}
        />
      ))}
    </div>
  );
};

export default PageContent;
