declare namespace NodeJS {
  export interface ErrnoException extends Error {
    errno?: number;
    code?: string;
    path?: string;
    syscall?: string;
  }
}

declare global {
  export interface Window1 {
    name: string;
    age: nubmer;
  }
}
