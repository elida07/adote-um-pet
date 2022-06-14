export const TextService = {
    limitText(text: string, maxChars: number): string {
        if (text.length < maxChars) {
            return text;
        };

        return text.slice(0, maxChars) + '...';
    }
}