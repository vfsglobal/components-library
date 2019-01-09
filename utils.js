export function capitalFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function getFileName(file) {
  var extensionIndex = file.lastIndexOf(".");

  return file.substring(0, extensionIndex == -1 ? file.length : extensionIndex);
}

export function substringFromText(
  str,
  startStr,
  endStr,
  fromIndex,
  includeStrings
) {
  if (!startStr || !endStr) return null;

  if (typeof fromIndex == "boolean") {
    includeStrings = fromIndex;
    fromIndex = undefined;
  }

  var startIndex = str.indexOf(startStr, fromIndex),
    endIndex = str.indexOf(endStr, startIndex + 1);

  return startIndex == -1 || endIndex == -1
    ? null
    : str.substring(
        startIndex + (includeStrings ? 0 : startStr.length),
        endIndex + (includeStrings ? endStr.length : 0)
      );
}
