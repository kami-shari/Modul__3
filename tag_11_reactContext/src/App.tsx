import Layout from "./components/Layout";
import { ThemeContextProvider } from "./contexts/themeContext";

function App() {
  return (
   
    <ThemeContextProvider>
      <Layout>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quas!</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ipsa ducimus nostrum cumque corporis aperiam. Eum possimus vitae architecto, consequuntur, rem delectus laboriosam ut sequi quibusdam quam non dolore aliquam eos exercitationem asperiores enim? Nisi enim inventore aperiam aliquam quam molestias repellat possimus, ipsum corrupti molestiae excepturi aliquid veritatis tenetur error delectus ut nam ab suscipit praesentium neque esse? Accusamus itaque quibusdam deleniti possimus magnam distinctio quasi odio numquam fugit expedita at velit ducimus nam eligendi saepe sint quis, provident enim maxime assumenda quas illo. Rerum consequatur, voluptatem illo possimus, soluta totam esse dolore veritatis quibusdam quod molestiae. Quisquam, atque!.</p>
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;