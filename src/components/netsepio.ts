// src/components/netsepio.ts

import { Review, ReviewStats, Token } from './types';

export async function getReviews(page: number = 1): Promise<Review[]> {
  const url = `https://gateway.netsepio.com/api/v1.0/getreviews?page=${page}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        // No more reviews available
        return [];
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.payload.reviews;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}

export async function getAllReviewsAndStats(): Promise<ReviewStats> {
  let allReviews: Review[] = [];
  let page = 1;
  let hasMoreReviews = true;

  while (hasMoreReviews) {
    const reviews = await getReviews(page);
    if (reviews.length === 0) {
      hasMoreReviews = false;
    } else {
      allReviews = allReviews.concat(reviews);
      page++;
    }
  }

  return {
    totalReviews: allReviews,
    totalCount: allReviews.length
  };
}


export async function getToken(params?: string): Promise<Token> {

  try {
    const response = await fetch(
      `https://gateway.netsepio.com/api/v1.0/sdkauthentication/generate-token?wallet_address=${params}&access_key=i0cga9j52a8ahi5bdd83125b5ai3cf7904i9g7h14dihe303idf9c59h5a7fdga2ch1d7cda1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );

    return response.json();

  } catch (error) {
    console.error('Error fetching WiFi nodes:', error);
    throw error;
  }

}