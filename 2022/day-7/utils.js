export const calcAdress = (filesystem, _currentAddress) => {
  if (
    !filesystem.filter(
      (item) =>
        JSON.stringify(item.address) === JSON.stringify([..._currentAddress, 1])
    ).length
  ) {
    return [..._currentAddress, 1];
  } else {
    const newAdress = [...filesystem[filesystem.length - 1].address];
    newAdress[newAdress.length - 1] = newAdress[newAdress.length - 1] + 1;
    return newAdress;
  }
};
