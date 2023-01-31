export const pad_array = (arr, len, fill) => {
  return arr.concat(Array(len).fill(fill)).slice(0, len);
}