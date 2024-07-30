export interface Review {
    metaDataUri: string;
    category: string;
    domainAddress: string;
    siteUrl: string;
    siteType: string;
    siteTag: string;
    siteSafety: string;
    siteIpfsHash: string;
    siteRating: number;
    transactionHash: string;
    transactionVersion: number;
    createdAt: string;
    voter: string;
    name: string;
}

export interface ReviewStats {
    totalReviews: Review[];
    totalCount: number;
}


// Example types definition for the VPN nodes
export interface VpnNode {
  id: string;
  name: string;
  httpPort: string;
  domain: string;
  nodename: string;
  chainName: string;
  address: string;
  region: string;
  status: string;
  downloadSpeed: number;
  uploadSpeed: number;
  startTimeStamp: number;
  lastPingedTimeStamp: number;
  walletAddress: string;
  walletAddressSol: string;
  ipinfoip: string;
  ipinfocity: string;
  ipinfocountry: string;
  ipinfolocation: string;
  ipinfoorg: string;
  ipinfopostal: string;
  ipinfotimezone: string;
}
  
  // Example type for the API response
  export interface VpnNodesResponse {
    nodes: VpnNode[];
  }


  // Example types definition for the VPN nodes
  export interface WiFiNodeStatus {
    macAddress: string;
    ipAddress: string;
    connectedAt: string;
    totalConnectedTime: number;
    connected: boolean;
    lastChecked: string;
    defaultGateway: string;
    manufacturer: string;
    interfaceName: string;
    hostSSID: string;
  }
  
  // Define the WiFiNode interface based on the provided data structure
  export interface WiFiNode {
    id: number;
    gateway: string;
    created_at: string;
    updated_at: string;
    status: WiFiNodeStatus[];
    password: string;
    location: string;
    price_per_min: string;
    wallet_address: string;
    chain_name: string;
  }
  
  // Example type for the API response containing WiFi nodes
  export interface WiFiNodesResponse {
    nodes: WiFiNode[];
  }

  // Example type for the API response
  export interface SubscriptionResponse {
    id: string;
  }
  export interface VpnClientResponse {
    payload: {
      client: {
        Name: string;
        Address: string;
        PresharedKey: string;
      };
      serverPublicKey: string;
      endpoint: string;
    };
    configFile: string;
    privateKey: string;
  }