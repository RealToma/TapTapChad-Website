export const shortAddress = (address: any) => {
  return address.slice(0, 18) + " ... " + address.slice(-16);
};
