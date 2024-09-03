import { auth } from "@clerk/nextjs/server";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
  const { userId } = auth();
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  courseImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 }
  })
  .middleware(() => handleAuth())
  .onUploadComplete(() => {}),

  courseAttachment: f({
    text: { maxFileSize: "1MB", maxFileCount: 5 },
    image: { maxFileSize: "10MB", maxFileCount: 10 },
    video: { maxFileSize: "512MB", maxFileCount: 1 },
    audio: { maxFileSize: "50MB", maxFileCount: 5 },
    pdf: { maxFileSize: "100MB", maxFileCount: 10 },
    docx: { maxFileSize: "50MB", maxFileCount: 10 },
    xlsx: { maxFileSize: "20MB", maxFileCount: 10 },
    bibtex: { maxFileSize: "10MB", maxFileCount: 1 }
  })
  .middleware(() => handleAuth())
  .onUploadComplete(() => {}),

  chapterVideo: f({
    video: { maxFileSize: "512MB", maxFileCount: 1 }
  })
  .middleware(() => handleAuth())
  .onUploadComplete(() => {}),
};
