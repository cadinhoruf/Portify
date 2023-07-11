import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #11BCC7;
    --color-black: #101119;
    --color-white: #FFFFFF;
    --color-light-gray: #F5F5F5;

    --font-family-primary: "Montserrat", sans-serif;
    --font-family-secondary: "Roboto", sans-serif;

		--font-size-1: 0.875rem; /* 14px */
		--font-size-2: 1rem; /* 16px */
		--font-size-3: 1.125rem; /* 18px */
		--font-size-4: 1.3125rem; /* 21px */
		--font-size-5: 1.75rem; /* 28px */	
		--font-size-6: 2.25rem; /* 36px */
		--font-size-7: 2.75rem; /* 44px */
		--font-size-8: 4rem; /* 64px */

		--font-weight-1: 400;
		--font-weight-2: 700;
  }
`;
