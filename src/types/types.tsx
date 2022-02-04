export interface IInput {
    id: number;
    icon: 'mail' | 'lock';
    placeholder: string;
    onChangeText: (text: string) => void;
    secureText?: boolean;
    value: string;
}