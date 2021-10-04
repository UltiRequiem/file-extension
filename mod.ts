export default function getFileExtension(fname: string) {
  return Promise.resolve(getFileExtensionSync(fname));
}

export function getFileExtensionSync(fname: string) {
  return fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);
}
