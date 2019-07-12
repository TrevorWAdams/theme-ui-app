/** @jsx jsx */
import { jsx, ThemeProvider, Container, Layout } from 'theme-ui';
import { css, Global } from "@emotion/core"
import theme from './theme';
import ColorSwitch from './components/color-switch';
import Cards from './components/card-list'
import DataGrid from './components/data-grid'
import UploadBox from './components/upload-box'

const cards = [1, 2, 3, 4, 5, 6]; // Demo data to generate 6 cards

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout> 
        <Global
        styles={css`
          body {
            margin: 0;
            max-width: 100vw;
            overflow-x: hidden;
          }
        `}
      />
        <ColorSwitch />
        <Container>
          <DataGrid />
          <UploadBox />
          <Cards cards={cards} />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;