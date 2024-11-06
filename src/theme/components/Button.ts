import { defineStyleConfig } from "@chakra-ui/react"



const Button = defineStyleConfig({
    baseStyle: {
        transition: 'all 0.2s ease-in-out',
        _hover: {
            filter: 'brightness(85%)',
        },
        _active: {
            transform: 'scale(0.94)',
        },
        // _disabled: {
        //     display: 'none',
        // }
    },
    variants: {
        "solid-rounded": {
            bgColor: 'primary.main',
            color: 'white',
            padding: '16px 20px',
            borderRadius: "25px",
            _hover: {
                bgColor: 'primary.main',
            },
            _active: {
                bgColor: 'supportive',
            },
        },
        "solid-rounded-white": {
            bgColor: 'white',
            color: 'primary.main',
            padding: '16px 20px',
            borderRadius: "25px",
            fontWeight: "700",
            _hover: {
             bgColor: 'whiteAlpha.800',
            },
            _active: {
                bgColor: 'whiteAlpha.900',
            }
        },
        "outline-rounded-white": {
            bgColor: 'transparent',
            color: 'white',
            padding: '16px 35px',
            borderRadius: "25px",
            fontWeight: "600",
            border: "1px solid white",
            _hover: {
             bgColor: 'whiteAlpha.100',
            },
            _active: {
                bgColor: 'whiteAlpha.200',
            }
        },
        solid: {
            bgColor: 'primary.main',
            color: 'white',
            padding: '10px 20px',
            borderRadius: "3px",
            _hover: {
             bgColor: 'primary.main',
            },
            _active: {
                bgColor: 'supportive',
            }
        },
        outline: {
            padding: '20px 30px',
            borderColor: 'primary.main',
            color: 'primary.main',
            fontWeight: '600',
            _hover: {
                bgColor: 'whiteAlpha.300',
            },
            _active: {
                bgColor: 'whiteAlpha.300',
            }
        },
        link: {
            color: 'black',
            fontWeight: '600',
            _hover: {
                textDecor: "unset",
                _after: {
                  content: '""',
                  position: "absolute",
                  bottom: "-3px",
                  left: "-10px",
                  width: "calc(100% + 20px)",
                  height: "1px",
                  backgroundColor: "blue",
                  transition: "width 0.3s ease-in-out",
                }
            }
        },
        text: {
            color: 'primary.main',
            fontWeight: '600',
            bgColor: "transparent",
            fontSize: ".9rem",
        },
    }
})


export default Button