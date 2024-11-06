import {
  Input,
  InputGroup,
  InputGroupProps,
  InputProps,
  InputRightElement,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { forwardRef, ReactNode, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export interface ITextField extends InputProps {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  containerProps?: InputGroupProps;
}

const TextField = forwardRef<HTMLInputElement, ITextField>(
  (
    { startAdornment, endAdornment, containerProps, type, ...inputProps },
    ref
  ) => {
    const { colorMode } = useColorMode();
    const isLight = colorMode === "light";
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
      <InputGroup
        size="md"
        border="1px solid"
        borderColor={isLight ? "blackAlpha.500" : "whiteAlpha.500"}
        borderRadius="5px"
        padding="10px"
        w="100%"
        {...containerProps}
        alignItems="center"
      >
        {startAdornment}
        <Input
          ref={ref}
          ml="10px"
          borderRadius={0}
          _placeholder={{
            color: isLight ? "blackAlpha.600" : "whiteAlpha.600",
          }}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          {...inputProps}
        />
        {type === "password" && (
          <InputRightElement>
            <IconButton
              variant="unstyled"
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              onClick={togglePasswordVisibility}
            />
          </InputRightElement>
        )}
        {endAdornment}
      </InputGroup>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;
