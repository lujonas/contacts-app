import { AbstractControl, ValidationErrors } from "@angular/forms";

export function restrictedWords(words: string[]) {
    return (control: AbstractControl) : ValidationErrors | null => {
        const invalidWords = words
        .map(word => control.value.includes(word) ? word : null)
        .filter(word => word != null);
        return invalidWords.length > 0 ? { restrictedWords: invalidWords.join(', ') } : null;
    }
}