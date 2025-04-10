export const useUtils = () => {
    const truncate = (text: string, length: number) => {
        if (!text) return '';
        return text.length > length ? text.slice(0, length) + '…' : text;
      }
    return {
        truncate
    }
}