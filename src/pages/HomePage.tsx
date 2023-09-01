import MainNav from "../components/Navigations/MainNav";

import ChangableHeadings from "../components/ChangableHeadings";
import SecondryNav from "../components/Navigations/SecondryNavigation/SecondryNav";
import { useEffect, useRef, useState } from "react";
import DarkModeToggler from "../components/DarkModeToggler";
import { useTheme } from "../hooks/useTheme";
import MulticolorBG from "../components/AnimatedBackground/MulticolorBG";
import AnimatedGears from "../components/AnimatedGears/AnimatedGears";

const HomePage = () => {
  const headings = [
    "HOI is Building the Future",
    "HOI is Building the Future",
    "HOI is Building the Future",
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [isNavActive, setNavActive] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { setThemeTODark, setThemeTOLight, theme } = useTheme();

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    setNavActive("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (headerRef.current && !isMobile) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          !entry.isIntersecting && setNavActive(true);
          entry.isIntersecting && setNavActive(false);
        });
      }, {});
      observer.observe(headerRef.current);
    }
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className="overflow-hidden relative flex text-center items-center justify-center w-full h-screen bg-opacity-0 p-5"
      >
        {!isMobile && (
          <MainNav
            setThemeTODark={setThemeTODark}
            setThemeTOLight={setThemeTOLight}
            theme={theme}
          />
        )}
        {(isNavActive || isMobile) && (
          <>
            <a href="/" className="w-fit fixed z-50 top-0 left-0">
              <img src="\logo-Trans.png" className="w-20" alt="HOI logo" />
            </a>
          </>
        )}
        <DarkModeToggler
          setThemeTODark={setThemeTODark}
          setThemeTOLight={setThemeTOLight}
          theme={theme}
          isVisible={isMobile || isNavActive}
        />
        <SecondryNav isVisible={isMobile || isNavActive} />

        <div className="headingContainer  w-11/12 lg:w-8/12 relative z-10">
          <ChangableHeadings headings={headings} type="h2" />
        </div>
        <AnimatedGears />
        <MulticolorBG />
      </header>

      <div className="w-full overflow-hidden bg-lightPrimary-400 dark:bg-darkPrimary-400 dark:text-darkPrimaryText-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem
        vero officiis dolor consequuntur maxime. Rem laboriosam tenetur,
        provident nulla, dolorum quibusdam ad quidem debitis animi deserunt
        nobis expedita quisquam. Hic reprehenderit, in voluptate eos laboriosam
        corporis placeat tempora minus nisi nulla, dignissimos, incidunt culpa
        cumque dolores minima nostrum! Consequuntur quo quos dolor culpa fugiat
        ullam tempora rerum labore voluptate! Aperiam, vero! Corporis ab minus
        officiis numquam cum perferendis aut tempore tempora totam amet, ducimus
        perspiciatis officia, aliquid culpa. Provident iure asperiores earum,
        molestias atque modi recusandae cum suscipit porro. Aliquid, voluptas.
        Laboriosam ab eveniet repellendus maxime earum quaerat corporis, iste
        ipsum praesentium, quasi deleniti suscipit, veritatis est! Ad,
        voluptatibus non laudantium deserunt error quidem deleniti nemo sapiente
        pariatur tempora? Provident itaque tempore, nostrum aliquam laudantium
        praesentium iusto illum asperiores quisquam officiis aliquid eveniet
        accusantium? Necessitatibus eius alias et doloribus, consectetur cum
        quasi animi eum obcaecati rem id placeat quos. Iusto maiores animi, id,
        totam necessitatibus exercitationem consectetur neque, fugit cum vitae
        architecto delectus veritatis labore officiis. Enim sed debitis beatae,
        quis ratione, fugit, porro nesciunt nobis molestias maiores distinctio.
        Ab nulla in fuga quis distinctio aut adipisci quas consectetur. Unde
        sunt maxime veniam nihil, minus eos omnis aspernatur sapiente, obcaecati
        rem iste. Illo quos consequuntur expedita ut quo facere? Porro,
        quibusdam excepturi sapiente inventore similique odio, ex, saepe omnis
        eius voluptate harum molestiae nostrum nam nemo impedit id beatae rem
        tempore laudantium unde? Optio perspiciatis repudiandae hic odio aut!
        Consequuntur magni quisquam quia placeat reprehenderit illo optio vitae
        unde! Porro saepe doloremque mollitia cum illum earum. Molestiae qui
        molestias iure tenetur, beatae magnam dolore iste autem, id totam
        itaque? Dolores, distinctio! Eveniet dolorum quos corporis ducimus
        provident atque aperiam reiciendis culpa, eligendi quae ab beatae vero
        incidunt maiores, in expedita rerum earum? Neque ipsam veritatis fuga
        facilis, vero deserunt? Quod nostrum aut culpa iste repudiandae iure
        commodi ea harum excepturi natus, eveniet illum porro sunt minima! Velit
        doloremque hic temporibus at nemo laboriosam saepe cumque nihil, earum
        similique optio! Sapiente, ex hic ipsum nihil blanditiis possimus earum?
        Molestiae corrupti quos voluptates blanditiis, dicta, earum asperiores
        est quasi esse accusantium dolor repudiandae tempore, nam officiis velit
        ipsum ab officia reiciendis? Quibusdam, excepturi corporis? Quidem
        aliquam exercitationem illo ex, aperiam eligendi mollitia dolor alias
        quis corporis fugiat optio itaque. Assumenda qui hic excepturi eligendi
        dolorem cum possimus debitis necessitatibus delectus! Et! Est cum
        doloremque iusto animi nihil voluptatibus laudantium distinctio
        accusamus vel. Ut iure explicabo corporis voluptates magni, cupiditate
        qui asperiores eum iste error soluta dolores unde officiis beatae vero.
        Maiores? Ad dolorum possimus molestiae magni nam repellat, ratione,
        natus inventore sit soluta dolor numquam eligendi ipsam architecto
        consequuntur. Dolore dolorum vero sint consectetur perferendis.
        Deserunt, sequi optio! Delectus, labore similique. Eum, esse nemo quos
        officia quas rerum molestias ducimus voluptatibus accusantium voluptatum
        dolores iure molestiae architecto vitae amet, recusandae non. Voluptates
        quis iure facere cum rem in dolor aperiam libero. Aperiam corporis
        blanditiis atque velit voluptatum temporibus laboriosam sint hic iure
        natus ratione accusamus vitae ab, rem ipsam assumenda esse error, illo
        cumque commodi. Voluptatibus et voluptatum dolorem ullam provident. Enim
        voluptatem accusamus suscipit ex consequuntur ut optio perferendis?
        Ullam dolorum eius, earum delectus id sunt voluptate amet porro eum
        blanditiis asperiores modi nulla quasi. Eum sed consequatur delectus
        vitae! Aperiam quas quia sint autem ducimus. Deserunt consequuntur
        ducimus excepturi! Dicta expedita cupiditate dolores obcaecati magnam
        dolor, error, quia ad blanditiis, laboriosam sint rem iusto quo ipsa
        optio. Atque, autem. Quas minus officiis ad animi ratione quasi
        molestiae incidunt deserunt expedita architecto! Adipisci modi,
        necessitatibus porro animi consectetur voluptatem tempore eaque
        voluptate hic fugiat impedit, beatae quam! Eligendi, odio beatae. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores rem vero
        officiis dolor consequuntur maxime. Rem laboriosam tenetur, provident
        nulla, dolorum quibusdam ad quidem debitis animi deserunt nobis expedita
        quisquam. Hic reprehenderit, in voluptate eos laboriosam corporis
        placeat tempora minus nisi nulla, dignissimos, incidunt culpa cumque
        dolores minima nostrum! Consequuntur quo quos dolor culpa fugiat ullam
        tempora rerum labore voluptate! Aperiam, vero! Corporis ab minus
        officiis numquam cum perferendis aut tempore tempora totam amet, ducimus
        perspiciatis officia, aliquid culpa. Provident iure asperiores earum,
        molestias atque modi recusandae cum suscipit porro. Aliquid, voluptas.
        Laboriosam ab eveniet repellendus maxime earum quaerat corporis, iste
        ipsum praesentium, quasi deleniti suscipit, veritatis est! Ad,
        voluptatibus non laudantium deserunt error quidem deleniti nemo sapiente
        pariatur tempora? Provident itaque tempore, nostrum aliquam laudantium
        praesentium iusto illum asperiores quisquam officiis aliquid eveniet
        accusantium? Necessitatibus eius alias et doloribus, consectetur cum
        quasi animi eum obcaecati rem id placeat quos. Iusto maiores animi, id,
        totam necessitatibus exercitationem consectetur neque, fugit cum vitae
        architecto delectus veritatis labore officiis. Enim sed debitis beatae,
        quis ratione, fugit, porro nesciunt nobis molestias maiores distinctio.
        Ab nulla in fuga quis distinctio aut adipisci quas consectetur. Unde
        sunt maxime veniam nihil, minus eos omnis aspernatur sapiente, obcaecati
        rem iste. Illo quos consequuntur expedita ut quo facere? Porro,
        quibusdam excepturi sapiente inventore similique odio, ex, saepe omnis
        eius voluptate harum molestiae nostrum nam nemo impedit id beatae rem
        tempore laudantium unde? Optio perspiciatis repudiandae hic odio aut!
        Consequuntur magni quisquam quia placeat reprehenderit illo optio vitae
        unde! Porro saepe doloremque mollitia cum illum earum. Molestiae qui
        molestias iure tenetur, beatae magnam dolore iste autem, id totam
        itaque? Dolores, distinctio! Eveniet dolorum quos corporis ducimus
        provident atque aperiam reiciendis culpa, eligendi quae ab beatae vero
        incidunt maiores, in expedita rerum earum? Neque ipsam veritatis fuga
        facilis, vero deserunt? Quod nostrum aut culpa iste repudiandae iure
        commodi ea harum excepturi natus, eveniet illum porro sunt minima! Velit
        doloremque hic temporibus at nemo laboriosam saepe cumque nihil, earum
        similique optio! Sapiente, ex hic ipsum nihil blanditiis possimus earum?
        Molestiae corrupti quos voluptates blanditiis, dicta, earum asperiores
        est quasi esse accusantium dolor repudiandae tempore, nam officiis velit
        ipsum ab officia reiciendis? Quibusdam, excepturi corporis? Quidem
        aliquam exercitationem illo ex, aperiam eligendi mollitia dolor alias
        quis corporis fugiat optio itaque. Assumenda qui hic excepturi eligendi
        dolorem cum possimus debitis necessitatibus delectus! Et! Est cum
        doloremque iusto animi nihil voluptatibus laudantium distinctio
        accusamus vel. Ut iure explicabo corporis voluptates magni, cupiditate
        qui asperiores eum iste error soluta dolores unde officiis beatae vero.
        Maiores? Ad dolorum possimus molestiae magni nam repellat, ratione,
        natus inventore sit soluta dolor numquam eligendi ipsam architecto
        consequuntur. Dolore dolorum vero sint consectetur perferendis.
        Deserunt, sequi optio! Delectus, labore similique. Eum, esse nemo quos
        officia quas rerum molestias ducimus voluptatibus accusantium voluptatum
        dolores iure molestiae architecto vitae amet, recusandae non. Voluptates
        quis iure facere cum rem in dolor aperiam libero. Aperiam corporis
        blanditiis atque velit voluptatum temporibus laboriosam sint hic iure
        natus ratione accusamus vitae ab, rem ipsam assumenda esse error, illo
        cumque commodi. Voluptatibus et voluptatum dolorem ullam provident. Enim
        voluptatem accusamus suscipit ex consequuntur ut optio perferendis?
        Ullam dolorum eius, earum delectus id sunt voluptate amet porro eum
        blanditiis asperiores modi nulla quasi. Eum sed consequatur delectus
        vitae! Aperiam quas quia sint autem ducimus. Deserunt consequuntur
        ducimus excepturi! Dicta expedita cupiditate dolores obcaecati magnam
        dolor, error, quia ad blanditiis, laboriosam sint rem iusto quo ipsa
        optio. Atque, autem. Quas minus officiis ad animi ratione quasi
        molestiae incidunt deserunt expedita architecto! Adipisci modi,
        necessitatibus porro animi consectetur voluptatem tempore eaque
        voluptate hic fugiat impedit, beatae quam! Eligendi, odio beatae. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Dolores rem vero
        officiis dolor consequuntur maxime. Rem laboriosam tenetur, provident
        nulla, dolorum quibusdam ad quidem debitis animi deserunt nobis expedita
        quisquam. Hic reprehenderit, in voluptate eos laboriosam corporis
        placeat tempora minus nisi nulla, dignissimos, incidunt culpa cumque
        dolores minima nostrum! Consequuntur quo quos dolor culpa fugiat ullam
        tempora rerum labore voluptate! Aperiam, vero! Corporis ab minus
        officiis numquam cum perferendis aut tempore tempora totam amet, ducimus
        perspiciatis officia, aliquid culpa. Provident iure asperiores earum,
        molestias atque modi recusandae cum suscipit porro. Aliquid, voluptas.
        Laboriosam ab eveniet repellendus maxime earum quaerat corporis, iste
        ipsum praesentium, quasi deleniti suscipit, veritatis est! Ad,
        voluptatibus non laudantium deserunt error quidem deleniti nemo sapiente
        pariatur tempora? Provident itaque tempore, nostrum aliquam laudantium
        praesentium iusto illum asperiores quisquam officiis aliquid eveniet
        accusantium? Necessitatibus eius alias et doloribus, consectetur cum
        quasi animi eum obcaecati rem id placeat quos. Iusto maiores animi, id,
        totam necessitatibus exercitationem consectetur neque, fugit cum vitae
        architecto delectus veritatis labore officiis. Enim sed debitis beatae,
        quis ratione, fugit, porro nesciunt nobis molestias maiores distinctio.
        Ab nulla in fuga quis distinctio aut adipisci quas consectetur. Unde
        sunt maxime veniam nihil, minus eos omnis aspernatur sapiente, obcaecati
        rem iste. Illo quos consequuntur expedita ut quo facere? Porro,
        quibusdam excepturi sapiente inventore similique odio, ex, saepe omnis
        eius voluptate harum molestiae nostrum nam nemo impedit id beatae rem
        tempore laudantium unde? Optio perspiciatis repudiandae hic odio aut!
        Consequuntur magni quisquam quia placeat reprehenderit illo optio vitae
        unde! Porro saepe doloremque mollitia cum illum earum. Molestiae qui
        molestias iure tenetur, beatae magnam dolore iste autem, id totam
        itaque? Dolores, distinctio! Eveniet dolorum quos corporis ducimus
        provident atque aperiam reiciendis culpa, eligendi quae ab beatae vero
        incidunt maiores, in expedita rerum earum? Neque ipsam veritatis fuga
        facilis, vero deserunt? Quod nostrum aut culpa iste repudiandae iure
        commodi ea harum excepturi natus, eveniet illum porro sunt minima! Velit
        doloremque hic temporibus at nemo laboriosam saepe cumque nihil, earum
        similique optio! Sapiente, ex hic ipsum nihil blanditiis possimus earum?
        Molestiae corrupti quos voluptates blanditiis, dicta, earum asperiores
        est quasi esse accusantium dolor repudiandae tempore, nam officiis velit
        ipsum ab officia reiciendis? Quibusdam, excepturi corporis? Quidem
        aliquam exercitationem illo ex, aperiam eligendi mollitia dolor alias
        quis corporis fugiat optio itaque. Assumenda qui hic excepturi eligendi
        dolorem cum possimus debitis necessitatibus delectus! Et! Est cum
        doloremque iusto animi nihil voluptatibus laudantium distinctio
        accusamus vel. Ut iure explicabo corporis voluptates magni, cupiditate
        qui asperiores eum iste error soluta dolores unde officiis beatae vero.
        Maiores? Ad dolorum possimus molestiae magni nam repellat, ratione,
        natus inventore sit soluta dolor numquam eligendi ipsam architecto
        consequuntur. Dolore dolorum vero sint consectetur perferendis.
        Deserunt, sequi optio! Delectus, labore similique. Eum, esse nemo quos
        officia quas rerum molestias ducimus voluptatibus accusantium voluptatum
        dolores iure molestiae architecto vitae amet, recusandae non. Voluptates
        quis iure facere cum rem in dolor aperiam libero. Aperiam corporis
        blanditiis atque velit voluptatum temporibus laboriosam sint hic iure
        natus ratione accusamus vitae ab, rem ipsam assumenda esse error, illo
        cumque commodi. Voluptatibus et voluptatum dolorem ullam provident. Enim
        voluptatem accusamus suscipit ex consequuntur ut optio perferendis?
        Ullam dolorum eius, earum delectus id sunt voluptate amet porro eum
        blanditiis asperiores modi nulla quasi. Eum sed consequatur delectus
        vitae! Aperiam quas quia sint autem ducimus. Deserunt consequuntur
        ducimus excepturi! Dicta expedita cupiditate dolores obcaecati magnam
        dolor, error, quia ad blanditiis, laboriosam sint rem iusto quo ipsa
        optio. Atque, autem. Quas minus officiis ad animi ratione quasi
        molestiae incidunt deserunt expedita architecto! Adipisci modi,
        necessitatibus porro animi consectetur voluptatem tempore eaque
        voluptate hic fugiat impedit, beatae quam! Eligendi, odio beatae.
      </div>
    </>
  );
};

export default HomePage;
