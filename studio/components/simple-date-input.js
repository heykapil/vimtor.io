import React, { useCallback } from "react";
import { FormField } from "@sanity/base/components";
import { Box, Flex, Select, TextInput } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import { useId } from "@reach/auto-id";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const SimpleDateInput = React.forwardRef((props) => {
    const { type, value, readOnly, markers, presence, compareValue, onFocus, onBlur, onChange } = props;

    const inputId = useId();

    const currentValue = value ? new Date(value) : null;

    const handleMonthChange = useCallback(
        // useCallback will help with performance
        (event) => {
            const inputValue = event.currentTarget.value;
            const newValue = value ? new Date(value) : new Date();
            newValue.setMonth(parseInt(inputValue));
            onChange(PatchEvent.from(inputValue ? set(newValue.toISOString()) : unset()));
        },
        [onChange, value]
    );

    const handleYearChange = useCallback(
        // useCallback will help with performance
        (event) => {
            const inputValue = event.currentTarget.value;
            const newValue = value ? new Date(value) : new Date();
            newValue.setFullYear(parseInt(inputValue));
            onChange(PatchEvent.from(inputValue ? set(newValue.toISOString()) : unset()));
        },
        [onChange, value]
    );

    return (
        <FormField
            description={type.description}
            title={type.title}
            __unstable_markers={markers}
            __unstable_presence={presence}
            compareValue={compareValue}
            inputId={inputId}
        >
            <Flex gap={3}>
                <Box flex={1}>
                    <Select
                        readOnly={readOnly}
                        placeholder="January"
                        value={currentValue ? currentValue.getMonth() : ""}
                        onChange={handleMonthChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index} selected={index === new Date().getMonth()}>
                                {month}
                            </option>
                        ))}
                    </Select>
                </Box>
                <Box flex={1}>
                    <TextInput
                        readOnly={readOnly}
                        type="number"
                        placeholder="2021"
                        value={currentValue ? currentValue.getFullYear() : ""}
                        onChange={handleYearChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                    />
                </Box>
            </Flex>
        </FormField>
    );
});

export default SimpleDateInput;
