export const stripHtml = (str: string) => str.replace(/(<([^>]+)>)/gi, "");

export const setTitle = (title?: string) => (title ? `${title} // Liil Dev` : "Liil Dev");
