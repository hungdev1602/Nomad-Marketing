import React from 'react'
import HeaderBlack from '../../components/HeaderBlack/HeaderBlack'
import InfoSection from '../../components/InfoSection/InfoSection'
import image1 from "./assets/image_1.svg"
import image6 from "./assets/image_6.svg"
import image7 from "./assets/image_7.svg"
import image8 from "./assets/image_8.svg"
import image9 from "./assets/image_9.svg"
import image10 from "./assets/image_10.svg"
import image11 from "./assets/image_11.svg"
import image12 from "./assets/image_12.svg"
import image13 from "./assets/image_13.svg"
import image14 from "./assets/image_14.svg"
import Type1 from '../../components/Type1/Type1'
import Col2Photo from '../../components/Col2Photo/Col2Photo'
import HalfText from '../../components/HalfText/HalfText'
import Footer from '../../components/Footer/Footer'
import NextPrevCase from '../../components/NextPrevCase/NextPrevCase'
import { casesData } from '../utils/const'
import ImageCustom from '../../components/ImageCustom/ImageCustom';

const Case7Page = () => {
  const caseData = {
    projectTitle: 'Pop-up «Самолет»',
    clientTitle: 'ГК «Самолет»',
    cards: ['events', 'архитектура'],
    description:
      'Перед нами стояли следующие задачи: подчеркнуть преимущества бренда, представить продукты экосистемы, повысить узнаваемость и привлечь новую аудиторию.',
    result: [
      {
        title: '5000',
        desc: 'гостей',
      },
      {
        title: '3790',
        desc: 'Проходимоть pop-up',
      }
    ],
  };
  const type1Data = {
      title1: 'Мы разработали pop-up пространство «Самолет», где гости могли познакомиться с ключевыми направлениями компании, включая 10D, HR и Cтрана/Девелоперы.',
      title2:
        'Наша команда полностью разработала архитектуру и дизайн pop-up зоны, которая стала эффективным инструментом лидогенерации и нетворкинга для гостей выставки.',
      image1: image6,
      image2: image7,
      widthTitle2: 'w-[75%] md:w-[49%]',
  };
  return (
    <>
      <main className="container mx-auto">
        <HeaderBlack />

        {/* Section 1 */}
        <InfoSection caseData={caseData} />

        {/* Section 2 */}
        <ImageCustom image={image1} />

        {/* Section 4 */}
        <div className="mt-[50px]">
          <Type1 type1Data={type1Data} />
        </div>

        {/* Section 5 */}
        <Col2Photo image1={image8} image2={image9} />

        {/* Section 6 */}
        <HalfText 
          title={'Центральной частью пространства и главным eye-catcher\'ом стала инсталляция с «залипательным» контентом. Мы полностью разработали ее архитектуру и наполнение.'}
        />

        {/* Section 7 */}
        <ImageCustom image={image10} />

        {/* Section 8 */}
        <HalfText 
          title={'Для вовлечения гостей мы добавили интерактивную карту присутствия компании. Гости отмечали города, где уже побывали или мечтают оказаться, и оставляли пожелания с помощью стикеров. Этот формат усилил эмоциональную связь с брендом.'}
        />

        {/* Section 9 */}
        <Col2Photo image1={image11} image2={image12} />

        {/* Section 10 */}
        <Col2Photo image1={image13} image2={image14} />

        <NextPrevCase dataPrev={casesData[4]} dataNext={casesData[6]} link={"/case2"}/>

        <Footer />
      </main>
    </>
  )
}

export default Case7Page