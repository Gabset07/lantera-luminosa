import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Ele quebrou meu braço, fui parar no hospital. Depois, abrigada na casa de parentes busquei a justiça. Elas me acompanharam, deram todo o apoio, amenizando as minhas dores até nos dias em que sinto nem quero mais viver. Este trabalho significou muito pra mim e, com certeza, está ajudando muitas mulheres. 
            </p>

            <Avatar
              image={userOneImg}
              name="Maria Santos"
              title="Vítima de machismo"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Descobri o horror de ser violentada, oprimida e deprimida. Me senti impotente! acolhimento, elas me ouviram, me defenderam em todas as audiências e estiveram comigo até o fim do processo porque são mulheres que entendem outras mulheres, sabem das nossas dores e lutam pelos mesmos ideias que os nossos.
            </p>

            <Avatar
              image={userTwoImg}
              name="Ana Clara Anjos"
              title="Vítima de machismo"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            Tinha acabado de sofrer abusos e maus tratos do meu ex parceiro, sem dinheiro para pagar advogados, fui apresentada a elas por uma pessoa do Ministério Público. Eu serei eternamente grata a todo o grupo por tudo o que fizeram e fazem por mim e por todas as mulheres que passam por momentos tão humilhantes, difíceis e cruéis nessa sociedade machista.
            </p>

            <Avatar
              image={userThreeImg}
              name="Eduarda Maia"
              title="Vítima de machismo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;