export const base64ToBlobPdf = (data: string): Blob => {
  const byteString = window.atob(data);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const int8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < byteString.length; i++) {
    int8Array[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([int8Array], { type: "application/pdf" });

  return blob;
};
