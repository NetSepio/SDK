// src/mySDK.ts

import { Review, ReviewStats, VpnNodesResponse, WiFiNodesResponse } from './types';

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

// Function to fetch all VPN nodes
export const getAllVPNs = async (param?: string): Promise<VpnNodesResponse> => {
const API_URL = `https://gateway.erebrus.io/api/v1.0/nodes/all`;

  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (error) {
    console.error('Error fetching VPN nodes:', error);
    throw error;
  }
};

// Function to fetch all VPN nodes
export const getAllWifi = async (): Promise<WiFiNodesResponse> => {
  const API_URL = 'https://dev.gateway.erebrus.io/api/v1.0/nodedwifi/all';
  
    try {
      const response = await fetch(API_URL);
      return response.json();
    } catch (error) {
      console.error('Error fetching VPN nodes:', error);
      throw error;
    }
  };

export class NetSepioSDK {
  async getReviews(page: number = 1): Promise<Review[]> {
    return await getReviews(page);
  }

  async getAllReviewsAndStats(): Promise<ReviewStats> {
    return await getAllReviewsAndStats();
  }

  async getAllVPNs(): Promise<VpnNodesResponse> {
    return await getAllVPNs();
  }

  async getAllWifi(): Promise<WiFiNodesResponse> {
    return await getAllWifi();
  }
}