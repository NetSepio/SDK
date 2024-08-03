# NetSepio SDK

## Introduction

NetSepio SDK is a powerful and flexible toolkit designed to interact with NetSepio's decentralized security and privacy services. NetSepio is a platform that aims to create a safer internet by leveraging blockchain technology and community-driven security reviews. This SDK provides developers with easy-to-use methods for integrating NetSepio's features into their applications.

## Table of Contents

1. Features
2. Installation
3. Usage
4. API Reference
5. Types
6. Error Handling
7. About Netsepio


## Features

- Manage and retrieve security reviews
- Handle user authentication
- Interact with VPN nodes
- Work with WiFi nodes
- Manage user subscriptions
- Create and manage VPN clients

## Installation

Install NetSepioSDK using npm:
```
npm install netsepio-sdk
```

##Usage

You can import the entire SDK or individual functions based on your needs:
```
Import the entire SDK
import { NetSepioSDK } from 'netsepio-sdk';
```

API Reference

#Reviews

Get Reviews

Retrieves reviews for a specific page.
```
const sdk = new NetSepioSDK();
const reviews = await sdk.getReviews(1);
```

Get All Reviews and Stats
```
Fetches all reviews and provides statistics.
const stats = await sdk.getAllReviewsAndStats();

// Or using individual import
import { getAllReviewsAndStats } from 'netsepio-sdk';
const stats = await getAllReviewsAndStats();
```

Authentication

#Get Token

Generates an authentication token.
```
const token = await sdk.getToken('your_wallet_address');

// Or using individual import
import { getToken } from 'netsepio-sdk';
const token = await getToken('your_wallet_address');
```

VPN Nodes
#Get All VPNs

Retrieves all available VPN nodes.
```
const vpnNodes = await sdk.getAllVPNs();

// Or using individual import
import { getAllVPNs } from 'netsepio-sdk';
const vpnNodes = await getAllVPNs();
```

WiFi Nodes

#Get All WiFi

Retrieves all available WiFi nodes.
```
const wifiNodes = await sdk.getAllWifi();

// Or using individual import
import { getAllWifi } from 'netsepio-sdk';
const wifiNodes = await getAllWifi();
```

##Subscription

#Subscribe

Subscribes a user to the service.
```
const subscription = await sdk.subscribe('auth_token');

// Or using individual import
import { subscribe } from 'netsepio-sdk';
const subscription = await subscribe('auth_token');

```

#Get Subscription

Retrieves subscription information for a user.
```
const subscriptionInfo = await sdk.getSubscription('auth_token');

// Or using individual import
import { getSubscription } from 'netsepio-sdk';
const subscriptionInfo = await getSubscription('auth_token');

```
#Get Clients

Retrieves client information for a subscription.
```
const clients = await sdk.getClients('auth_token');

// Or using individual import
import { getClients } from 'netsepio-sdk';
const clients = await getClients('auth_token');
```

VPN Clients

#Create VPN Client

Creates a new VPN client.
```
const vpnClient = await sdk.createVpnClient('ClientName', 'US', 'auth_token');

// Or using individual import
import { createClient } from 'netsepio-sdk';
const vpnClient = await createClient('ClientName', 'US', 'auth_token');
```


<h1>Types</h1>

The SDK uses TypeScript and provides several interfaces to ensure type safety:

-Review: Represents a single security review.

-ReviewStats: Contains an array of reviews and the total count.

-Token: Represents an authentication token.

-VpnNode: Represents a single VPN node.

-VpnNodesResponse: Contains an array of VPN nodes.

-WiFiNodeStatus: Represents the status of a WiFi node.

-WiFiNode: Represents a single WiFi node.

-WiFiNodesResponse: Contains an array of WiFi nodes.

-SubscriptionResponse: Represents a subscription response.

-ClientsResponse: Represents a client response.

-VpnClientResponse: Contains information about a created VPN client.

For detailed structure of these interfaces, refer to the types.ts file in the SDK.

Error Handling
Most methods in the SDK return Promises and may throw errors. It's recommended to use try-catch blocks when calling these methods:
```
javascriptCopytry {
  const reviews = await sdk.getReviews(1);
  // Process reviews
} catch (error) {
  console.error('Error fetching reviews:', error);
  // Handle error appropriately
}
```


<h1>About NetSepio</h1>

NetSepio is a decentralized platform aimed at creating a safer internet experience. By leveraging blockchain technology and community-driven security reviews, NetSepio provides:

-Decentralized VPN and WiFi services

-Community-driven security reviews for websites and online services

-Blockchain-based authentication and subscription management

The NetSepio SDK is designed to make it easy for developers to integrate these powerful features into their own applications, contributing to a more secure and private internet ecosystem.
For more information about NetSepio and its mission, visit https://netsepio.com/.
