import { useState } from 'react'

const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = (value) => {
        setValue(curValue =>
            typeof value === "boolean" ? value : !curValue

        )
    }

    return [value,toggleValue]
}

export default useToggle;