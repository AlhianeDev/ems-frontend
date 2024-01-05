import { useState } from "react";

export type BindType = {

    value: string;

    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export const useInput = 

    (initialValue: string = ""): [string, BindType, (resetedValue?: string) => void] => {

    const [value, setValue] = useState(initialValue);

    const reset = (resetedValue: string = "") => setValue(resetedValue);

    const bind = {

        value,

        onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    }

    return [value, bind, reset];

}

