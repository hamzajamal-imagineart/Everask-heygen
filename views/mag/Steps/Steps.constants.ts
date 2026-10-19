import { MAG_MEDIA } from "../media.constants";

/* The three steps from magnific.com/ai/image-upscaler and /ai/video-upscaler
   ("How to upscale images" / "How to upscale video to 4K"), merged. */
export const STEPS = [
  {
    title: "Upload one or more images, or a video",
    body: "Drag and drop your files, or use what you just made in EverAsk. Video clips up to 8 seconds long.",
    icon: MAG_MEDIA.stepUpload,
  },
  {
    title: "Select an upscaling model",
    body: "Classic for a fast, clean result; Magnific or Creative for up to 10K and fine control. For video, Magnific or Topaz, with resolution and fps.",
    icon: MAG_MEDIA.stepModel,
  },
  {
    title: "Download or keep editing",
    body: "Take the high-resolution file, or keep working on it in EverAsk.",
    icon: MAG_MEDIA.stepDownload,
  },
];
