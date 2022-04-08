export function fileExtension(fname: string) {
  return fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);
}
