import {
  // Section,
  // SocialNetworks,
  // Title,
  Cover,
  BuyMeCoffee,
} from "../../my_blog_start/components ";

const LOAD_MORE_STEP = 4;

function Home({ posts }) {
  return (
    <div>
      <Section>
        <Cover title="Olga<br/> Braiko" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}
export default Home;

// export const getServerSideProps = async () => {
//   const { posts, total } = await loadDate(0, LOAD_MORE_STEP);
// };

// function loadDate(start, end) {
//   const query = ``;
// }
