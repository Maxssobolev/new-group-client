export const hasNull = (target: any) => {
  for (var member in target) {
    if (target[member] == null) return true;
  }
  return false;
};
