'use client';

import { Article } from "@/interface/Article";
import { useState, useEffect } from "react";

export const useArticles = ({ username }: { username: string }) => {
  const [isLoading, setIsLoading] = useState(true); 
  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchArticles() {
    try {
      const response = await fetch(`https://dev.to/api/articles?username=${username}`);
      const data = await response.json();

        setArticles(data);
    } catch (error) {
      console.error(error);
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { articles, isLoading };
};
