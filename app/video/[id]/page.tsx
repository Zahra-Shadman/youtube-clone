"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function VideoDetail() {
  const { id } = useParams();
  const [video, setVideo] = useState<any>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/videos/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    };
    fetchVideo();
  }, [id]);

  if (!video) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="aspect-video w-full bg-black rounded-lg overflow-hidden mb-4">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={1280}
          height={720}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      <h1 className="text-xl font-bold mb-2">{video.title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {video.views} بازدید • {video.uploaded}
      </p>

      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={video.channelAvatar || "/avatar.png"}
            alt={video.channelName}
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
          <div>
            <p className="font-semibold">{video.channelName}</p>
            <p className="text-xs text-gray-500">{video.subscribers} مشترک</p>
          </div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700">
          اشتراک
        </button>
      </div>

      <div className="bg-gray-100 p-3 rounded-lg mb-6">
        <p className="text-sm text-gray-800 whitespace-pre-line">
          {video.description}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">کامنت‌ها</h2>
        {video.comments && video.comments.length > 0 ? (
          <div className="space-y-3">
            {video.comments.map((c: any, i: number) => (
              <div key={i} className="flex gap-3">
                <Image
                  src={c.avatar || "/avatar.png"}
                  alt={c.user}
                  width={35}
                  height={35}
                  className="rounded-full"
                  unoptimized
                />
                <div>
                  <p className="text-sm font-semibold">{c.user}</p>
                  <p className="text-sm text-gray-700">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">هیچ کامنتی وجود ندارد</p>
        )}
      </div>
    </div>
  );
}
