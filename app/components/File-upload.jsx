import { UploadDropzone } from "@uploadthing/react";
import toast from "react-hot-toast";

// File upload component
export const FileUpload = ({ onChange, endpoint }) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url) {
          onChange(res[0].url);
        }
      }}
      onUploadError={(error) => {
        toast.error(`${error?.message}`);
      }}
    />
  );
};
