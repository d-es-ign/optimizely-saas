import image from './image.mocks';

export const video = {
  poster: image,
  videoSource:
    'https://deco-inte.jotun.com/siteassetsjot03/video/test-video-16x9-1080p.mp4',
};

export const videoNoPoster = {
  poster: null,
  videoSource:
    'https://deco-inte.jotun.com/siteassetsjot03/video/test-video-16x9-1080p.mp4',
  videoAttributes: {
    playsinline: true,
    muted: true,
    playing: true,
  },
};

export default video;
