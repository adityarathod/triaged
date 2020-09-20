// fun logging primitives
export const warn = (message: any): void => console.warn(`[TRIAGED APP] ${message}`)
export const error = (message: any): void => console.error(`[TRIAGED APP] ${message}`)
export const log = (message: any): void => console.log(`[TRIAGED APP] ${message}`)
export const info = (message: any): void => console.info(`[TRIAGED APP] ${message}`)
