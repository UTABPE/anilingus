import { Title } from "../atoms/Title";
export function AppFooter() {
  return (
    <section className="footer-container">
      <div className="footer-container__left">
        <Title level={4}>ANI</Title>
        <div className="flex flex-col">
          <span>© 2022 Anilingus.org</span>
          <span>Написать нам Anilingus.org@ya.ru</span>
        </div>
      </div>
      <div>
        <span>Че-нибудь</span>
      </div>
    </section>
  );
}
