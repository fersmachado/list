import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../src/styled/theme";

const withThemeProvider=(Story,context)=>{
  return (
    <ThemeProvider theme={defaultTheme}>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];