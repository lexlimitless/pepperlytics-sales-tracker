# Pepperlytics Data Connector

A Stripe app that syncs payment and customer data to the Pepperlytics analytics platform for marketing attribution and sales tracking.

## Features

- **Real-time webhook processing** - Automatically receives Stripe events and forwards relevant data to Pepperlytics
- **Historical data sync** - Bulk sync existing Stripe data on initial setup
- **Secure data transmission** - All data is sent securely to Pepperlytics with API key authentication

## Stripe Events Handled

- `checkout.session.completed` - Successful checkout sessions
- `payment_intent.succeeded` - Completed payments
- `customer.created` - New customer registrations
- `charge.succeeded` - Successful charges

## Setup

1. Clone this repository
2. Copy `.env.example` to `.env` and configure:
   ```bash
   cp .env.example .env
   ```

3. Set your environment variables:
   ```
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
   PEPPERLYTICS_API_URL=https://api.pepperlytics.com
   PEPPERLYTICS_API_KEY=your_pepperlytics_api_key_here
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Deploy to Stripe:
   ```bash
   stripe apps upload
   ```

## Usage

### Start the connector
```bash
npm start
```

### Manual data sync
```bash
npm run sync
```

### Webhook endpoint
The app exposes a webhook endpoint at `/webhook` that processes incoming Stripe events.

## Environment Variables

- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `STRIPE_WEBHOOK_SECRET` - Webhook signing secret from Stripe
- `PEPPERLYTICS_API_URL` - Pepperlytics API endpoint
- `PEPPERLYTICS_API_KEY` - Your Pepperlytics API key
- `INITIAL_SYNC` - Set to 'true' to perform initial data sync on startup

## Data Synced

The connector syncs the following data to Pepperlytics:

- Customer information (email, name, creation date)
- Payment amounts and currencies
- Transaction metadata for attribution
- Checkout session details
- Charge information

All data is timestamped and includes relevant Stripe IDs for tracking and deduplication.