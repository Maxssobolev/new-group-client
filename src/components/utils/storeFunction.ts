export const serializeFunction = (func: () => any) => func.toString();
export const deserializeFunction = (funcString: string) => new Function(`return ${funcString}`)();
