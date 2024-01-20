import {ChangeEvent} from 'react';

export type IEv = ChangeEvent<HTMLInputElement>;
export type IgetSanitized = (e: IEv) => string;
export type IAreAllNumericStrings = (...values: string[]) => boolean;
