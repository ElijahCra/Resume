export const dev = process.env.NODE_ENV === 'development';
export const protocol = dev ? 'http' : 'https';
