export const fetchWord = async (param: string):Promise<Object> => {
    const searchTerm = param;
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
    const response = data.json();
    return response;
}