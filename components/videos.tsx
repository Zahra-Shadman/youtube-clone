"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { VscKebabVertical } from "react-icons/vsc";

export const Videos: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const GetVideo = async () => {
      try {
        const response = await axios.get("http://localhost:4000/videos");
        setVideos(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    GetVideo();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col items-end">
          <Image
            width={400}
            height={300}
            src={video.thumbnail}
            alt={video.title}
            className="rounded-md"
            unoptimized
          />
          <div className="flex flex-col items-end">
            <h3 className="font-semibold mt-2 ">
              <button className=" hover:bg-gray-100 p-2 rounded-full float-left ">
                <VscKebabVertical className="w-4 h-4 flex" />
              </button>
              {video.title}
            </h3>
            <p className="text-sm text-gray-600">{video.channelName}</p>
            <p className="text-xs text-gray-500">
              {video.views} • {video.uploaded}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
