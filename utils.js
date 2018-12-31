export function capitalFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function getFileName(file) {
  return file.substring(0, file.lastIndexOf("."));
}

export function substringFromText(str, startStr, endStr, includeStrings) {
  if (!startStr || !endStr) return null;

  var startIndex = str.indexOf(startStr),
    endIndex = str.indexOf(endStr, startIndex + 1);

  return startIndex == -1 || endIndex == -1
    ? null
    : str.substring(
        startIndex + (includeStrings ? 0 : startStr.length),
        endIndex + (includeStrings ? endStr.length : 0)
      );
}
