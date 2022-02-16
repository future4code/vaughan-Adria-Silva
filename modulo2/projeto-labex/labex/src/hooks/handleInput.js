import { useState } from "react"

export const useInput = (type, placeholder) =>{
    const [data, setData] = useState(undefined);

    const handleOnChange = (event) => {
        setData(event.target.value);
    }

    const input = <input
        placeholder={placeholder}
        value={data} 
        onChange={handleOnChange}
        type={type}
    />;

    return [data, input];
}