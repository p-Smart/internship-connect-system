import { ThemeOverride } from "@chakra-ui/react"




const Text = {
  baseStyle: {
      
  },
  variants: {
      h1: {
        fontWeight: '600',
        fontSize: { xs: '32px', md: '40px', lg: '48px', xl: "54px" },
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: '600',
        fontSize: { xs: '28px', md: '32px', lg: '40px', xl: '48px' },
        lineHeight: 1.2,
      },
      h3: {
        fontWeight: '600',
        fontSize: { xs: '28px', md: '32px', lg: '40px' },
        lineHeight: 1.2,
      },
      h4: {
        fontWeight: '600',
        fontSize: { xs: '26px', md: '28px', lg: '32px' },
        lineHeight: 1.2,
      },
      h5: {
        fontWeight: '600',
        fontSize: { xs: '20px', md: '24px' },
        lineHeight: 1.2,
      },
      h6: {
        fontWeight: '600',
        fontSize: { xs: '16px', md: '18px' },
        lineHeight: 1.2,
      },
  }
} satisfies ThemeOverride['components']['Text']

export default Text