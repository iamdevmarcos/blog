'use client';

import { useArticles } from '@/hooks/useArticles';
import Noise from '../components/Noise';
import { Article as ArticleType } from '@/interface/Article';

const images = [
  {
    src: '/assets/marcos.png',
    alt: 'Marcos',
  },
  {
    src: '/assets/joao.png',
    alt: 'João',
  },
];

const ArticleList = ({ articles, isLoading }: { articles: ArticleType[], isLoading: boolean }) => (
  <div
    className="rounded-2xl bg-[#F5DD9C] border-[2px] border-[#653C00] px-8 w-full max-w-[60%] min-h-[400px] relative overflow-hidden"
    style={{ letterSpacing: '-0.6px' }}
  >
    {isLoading ? (
      <div className="w-full h-[400px] flex items-center justify-center">
        <img src="/assets/loading.png" alt="Loading" className="w-32 h-32" />
      </div>
    ) : (
      <div className="overflow-y-auto h-[400px] scrollbar-hide hover:pause">
        <div className="flex flex-col gap-8 animate-scroll">
          {/* Primeiro conjunto de artigos */}
          {articles.map((article) => (
            <Article key={`original-${article.id}`} article={article} />
          ))}
          {/* Duplicado para criar efeito infinito */}
          {articles.map((article) => (
            <Article key={`duplicate-${article.id}`} article={article} />
          ))}
          {/* Triplicado para garantir transição suave */}
          {articles.map((article) => (
            <Article key={`triplicate-${article.id}`} article={article} />
          ))}
        </div>
      </div>
    )}
    {/* Gradientes de fade */}
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F5DD9C] to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#F5DD9C] to-transparent pointer-events-none" />
  </div>
);

const Avatars = () => (
  <div
    className="flex gap-12 items-center justify-center mt-16"
    style={{ letterSpacing: '-0.6px' }}
  >
    {images.map((image) => (
      <div
        key={image.src}
        className={`bg-top bg-no-repeat w-[220px] aspect-square rounded-full border-[2px] border-[#50380A]`}
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: '100%',
          letterSpacing: '-0.6px',
        }}
      />
    ))}
  </div>
);

const Article = ({ article }: { article: ArticleType }) => (
  <div className="flex flex-col gap-3" style={{ letterSpacing: '-0.6px' }}>
    <h2
      className="text-3xl font-semibold color-[#353816]"
      style={{ letterSpacing: '-0.6px' }}
    >
      {article.title}
    </h2>
    <p
      className="text-lg color-[#2A2103]"
      style={{ letterSpacing: '-0.6px' }}
    >
      {article.description}
    </p>
    <div
      className="flex items-center justify-between font-light"
      style={{ letterSpacing: '-0.6px' }}
    >
      <p>{article.reading_time_minutes} min read</p>
      <p>{article.readable_publish_date}</p>
    </div>
  </div>
);

const scrollAnimation = `
@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-33.33%);  /* Alterado para -33.33% para um loop mais suave */
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
}

.hover\\:pause:hover .animate-scroll {
  animation-play-state: paused;
}

/* Adiciona scroll snap para controlar o scroll manual */
.overflow-y-auto {
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

.flex-col > * {
  scroll-snap-align: start;
}

/* Previne scroll excessivo */
.overflow-y-auto {
  overscroll-behavior-y: contain;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
`;

const Home = () => {
  const { articles, isLoading } = useArticles({ username: 'iamdevmarcos' });

  return (
    <>
      <style>{scrollAnimation}</style>
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center gap-16"
        style={{
          backgroundImage: "url('/assets/bg.png')",
          backgroundAttachment: 'fixed',
          letterSpacing: '-0.6px',
        }}
      >
        <Noise />
        <Avatars />
        <ArticleList articles={articles} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Home;
