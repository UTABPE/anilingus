import { Title } from "../atoms/Title";
export function AppFooter() {
  return (
    <section className="footer-container">
      <div className="flex flex-row">
        <Title level={4}>ANI</Title>
        <div className="flex flex-col">
          <span>© 2022 Anilingus.org - Аниме Лингуа смотрите аниме онлайн</span>
          <span>
            Все права защищены, берегитесь пиратов! Написать нам
            Anilingus.org@ya.ru
          </span>
        </div>
      </div>
      <div>
        <span>Че-нибудь</span>
      </div>
    </section>
  );
}
