'use client';

import { useArticles } from '@/hooks/useArticles';
import Noise from '../components/Noise';
import { Article as ArticleType } from '@/interface/Article';
import Link from 'next/link';
import Music from '../components/Music';
import PixelTransition from '@/components/PixelTransition';
const images = [
  {
    src: '/assets/marcos.png',
    alt: 'Marcos',
    secondImage: '/assets/marcos-real.png',
    picClass: '220px 290px'
  },
  {
    src: '/assets/joao.png',
    alt: 'João',
    secondImage: '/assets/joao-real.png',
    picClass: 'cover'
  },
];

const ArticleList = ({ articles }: { articles: ArticleType[] }) => (
  <div
    className="rounded-2xl bg-[#F5DD9C] border-[2px] border-[#653C00] w-full max-w-[90%] md:max-w-fit min-h-[450px] relative overflow-hidden"
    style={{ letterSpacing: '-0.6px' }}
  >
    <div className="overflow-y-auto h-[400px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#F5DD9C] [&::-webkit-scrollbar-thumb]:bg-[#653C00] [&::-webkit-scrollbar-thumb]:rounded-full">
      <div className="flex flex-col gap-8 p-8">
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  </div>
);

const Avatars = () => (
  <div
    className="flex gap-8 md:gap-12 items-center justify-center mt-24 md:mt-16"
    style={{ letterSpacing: '-0.6px' }}
  >
    {images.map((image) => (
    <PixelTransition
      firstContent={
        <div
            key={image.src}
            className={`bg-top bg-no-repeat w-[140px] md:w-[220px] aspect-square rounded-full border-[2px] border-[#50380A]`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: '100%',
              letterSpacing: '-0.6px',
            }}
          />
      }
      secondContent={
        <>
        <div
            key={image.src}
            className={`bg-top bg-no-repeat w-[140px] object-cover md:w-[220px] aspect-square rounded-full border-[2px] border-[#50380A]`}
            style={{
              backgroundImage: `url(${image.secondImage})`,
              backgroundSize: image.picClass,
              letterSpacing: '-0.6px',
            }}
          />
        </>
      }
      gridSize={11}
      pixelColor='#ffffff'
      animationStepDuration={0.4}
      className="custom-pixel-card"
    />
    ))}
  </div>
);

const Article = ({ article }: { article: ArticleType }) => (
  <Link href={article.url} target="_blank">
    <div className="flex flex-col gap-3" style={{ letterSpacing: '-0.6px' }}>
      <h2
        className="text-2xl md:text-3xl font-semibold color-[#353816]"
        style={{ letterSpacing: '-0.6px' }}
      >
        {article.title}
      </h2>
      <p
        className="text-base md:text-xl color-[#2A2103]"
        style={{ letterSpacing: '-0.6px' }}
      >
        {article.description}
      </p>
      <div
        className="flex items-center justify-between font-light"
        style={{ letterSpacing: '-0.6px' }}
      >
        <p>{article.reading_time_minutes} min read</p>
        <p>{new Date(article.readable_publish_date).toLocaleDateString('en-US', { 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        })}</p>
      </div>
    </div>
  </Link>
);

const Home = () => {
  const { articles, isLoading } = useArticles({ username: 'iamdevmarcos' });

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center gap-10 md:gap-16"
      style={{
        backgroundImage: "url('/assets/bg.png')",
        backgroundAttachment: 'fixed',
        letterSpacing: '-0.6px',
      }}
    >
      <Music />
      <Noise />
      <Avatars />
      {isLoading ? (
        <div className="w-full max-w-[90%] md:max-w-fit h-[450px] flex items-center justify-center">
          <img src="/assets/loading.png" alt="Loading" className="w-64 h-64 rounded-2xl border-[3px] border-[#653C00]" />
        </div>
      ) : (
        <ArticleList articles={articles} />
      )}
    </div>
  );
};

export default Home;
