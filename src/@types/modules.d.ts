declare module '*.html' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare namespace NodeJS {
  export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
  }
}
