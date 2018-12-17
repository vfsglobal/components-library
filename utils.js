export function capitalFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function getFileName(file) {
  return file.substring(0, file.lastIndexOf('.'));
}