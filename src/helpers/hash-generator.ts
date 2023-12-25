export function randomHash(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-,.?=!#$%&/()=^`*";
  return Array.from({ length }).reduce((acc: string) => {
    const randIndex = Math.floor(Math.random() * characters.length);
    return (acc += characters.charAt(randIndex));
  }, "");
}
