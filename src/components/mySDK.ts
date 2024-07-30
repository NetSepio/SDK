// src/components/mySDK.ts

import { Review, ReviewStats, VpnNodesResponse, WiFiNodesResponse, SubscriptionResponse , VpnClientResponse } from './types';
import { getReviews, getAllReviewsAndStats } from './netsepio';
import { getAllVPNs, getAllWifi, subscription ,  createClient} from './erebrus';

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

  async subscription(): Promise<SubscriptionResponse> {
    return await subscription();
  }
  async createVpnClient(name: string, region: string, auth: string): Promise<VpnClientResponse> {
    return await createClient(name, region, auth);
  }
}

// Re-export functions for individual use if needed
export { getReviews, getAllReviewsAndStats, getAllVPNs, getAllWifi, subscription , createClient};