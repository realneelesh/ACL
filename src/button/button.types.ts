export interface ButtonProps {
    color: 'green' | 'red';
    label: string; 
    style?: object;
}

export interface ButtonWrapProps {
    type: 'primary' | 'secondary';
}