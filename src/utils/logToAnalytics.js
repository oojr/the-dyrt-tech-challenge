export const log = (event, data) => {
  console.log("logging event", event, "with data", data);
};

export const getInitials = (name) => {
  const nameArray = name.split(" ");
  if (nameArray.length < 2) {
    return name.charAt(0);
  } else {
    return `${name.charAt(0)}${nameArray[nameArray.length - 1].charAt(0)}`;
  }
};
