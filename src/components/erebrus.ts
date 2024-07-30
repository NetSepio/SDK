// src/components/erebrus.ts

import { VpnNodesResponse, WiFiNodesResponse, SubscriptionResponse , VpnClientResponse} from './types';
import * as crypto from 'crypto';
import { lib, enc } from "crypto-js";
import { generateKeyPair } from 'curve25519-js';

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

export const createClient = async (
  name: string,
  region: string,
  auth: string
): Promise<VpnClientResponse> => {
  const EREBRUS_GATEWAY_URL = 'https://gateway.erebrus.io/'; // Adjust this URL if needed

  const genKeys = () => {
    const preSharedKey = lib.WordArray.random(32);
    const preSharedKeyB64 = preSharedKey.toString(enc.Base64);

    const keyPair = generateKeyPair(crypto.randomBytes(32));
    const privKey = Buffer.from(keyPair.private).toString('base64');
    const pubKey = Buffer.from(keyPair.public).toString('base64');

    return {
      preSharedKey: preSharedKeyB64,
      privKey: privKey,
      pubKey: pubKey,
    };
  };

  const keys = genKeys();

  const jsonData = JSON.stringify({
    name: name,
    presharedKey: keys.preSharedKey,
    publicKey: keys.pubKey,
  });

  try {
    const response = await fetch(
      `${EREBRUS_GATEWAY_URL}api/v1.0/erebrus/client/${region}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth}`,
        },
        body: jsonData,
      }
    );

    if (response.status === 200) {
      const responseData = await response.json();
      const configFile = `
[Interface]
Address = ${responseData.payload.client.Address}
PrivateKey = ${keys.privKey}
DNS = 1.1.1.1

[Peer]
PublicKey = ${responseData.payload.serverPublicKey}
PresharedKey = ${responseData.payload.client.PresharedKey} 
AllowedIPs = 0.0.0.0/0, ::/0
Endpoint = ${responseData.payload.endpoint}:51820
PersistentKeepalive = 16`;

      return {
        ...responseData,
        configFile,
        privateKey: keys.privKey,
      };
    } else {
      throw new Error('Failed to create VPN. Try with unique name.');
    }
  } catch (error) {
    console.error('Error creating VPN client:', error);
    throw error;
  }
};