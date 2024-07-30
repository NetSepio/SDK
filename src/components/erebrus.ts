// src/components/erebrus.ts

import { VpnNodesResponse, WiFiNodesResponse, SubscriptionResponse } from './types';

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

export const getAllWifi = async (): Promise<WiFiNodesResponse> => {
  const API_URL = 'https://dev.gateway.erebrus.io/api/v1.0/nodedwifi/all';
  
  try {
    const response = await fetch(API_URL);
    return response.json();
  } catch (error) {
    console.error('Error fetching WiFi nodes:', error);
    throw error;
  }
};


export const subscription = async (param?: string): Promise<SubscriptionResponse> => {  
  try {
    const response = await fetch(
      `https://gateway.erebrus.io/api/v1.0/subscription/trial`,
      {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${param}`,
        },
      }
    );

    return response.json();

  } catch (error) {
    console.error('Error fetching WiFi nodes:', error);
    throw error;
  }
};