import React, { useCallback } from "react";
import { FormField } from "@sanity/base/components";
import { TextInput, Text, Flex, Box, Card } from "@sanity/ui";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import {useId} from "@reach/auto-id";

const UrlInput = React.forwardRef((props, ref) => {
    const { type, value, readOnly, placeholder, markers, presence, compareValue, onFocus, onBlur, onChange } = props;

    const inputId = useId()

    const baseUrl = type.options.baseUrl;

    const handleChange = useCallback(
        // useCallback will help with performance
        (event) => {
            const inputValue = event.currentTarget.value; // get current value
            // if the value exists, set the data, if not, unset the data
            onChange(PatchEvent.from(inputValue ? set(baseUrl + inputValue) : unset()));
        },
        [onChange]
    );


    return (
        <FormField description={type.description} title={type.title} __unstable_markers={markers} __unstable_presence={presence} compareValue={compareValue} inputId={inputId}>
            <Flex>
                <Flex as={Card} align="center" paddingX={3} border borderRight={false}>
                    <Text muted size={1}>
                        {baseUrl}
                    </Text>
                </Flex>
                <Box flex={1}>
                    <TextInput
                        id={inputId}
                        value={value ? value.replace(baseUrl, "") : ""}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </Box>
            </Flex>
        </FormField>
    );
});

export default UrlInput;
