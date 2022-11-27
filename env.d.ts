declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_CLOUDINARY_URL: string;
      REACT_APP_CLOUDINARY_PRESET: string;
    }
  }
}

export {}
