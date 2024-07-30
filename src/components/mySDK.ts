// src/components/mySDK.ts

import { Review, ReviewStats, VpnNodesResponse, WiFiNodesResponse } from './types';
import { getReviews, getAllReviewsAndStats } from './netsepio';
import { getAllVPNs, getAllWifi } from './erebrus';

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

// Re-export functions for individual use if needed
export { getReviews, getAllReviewsAndStats, getAllVPNs, getAllWifi };