/**
 * Pepperlytics Data Connector for Stripe
 * Main entry point for the Stripe app that syncs data to Pepperlytics
 */

import Stripe from 'stripe';
import { StripeDataSync } from './sync.js';

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize data sync service
const dataSync = new StripeDataSync(stripe);

/**
 * Main app initialization
 */
export async function initialize() {
  console.log('Pepperlytics Data Connector starting...');
  
  try {
    // Verify Stripe connection
    const account = await stripe.accounts.retrieve();
    console.log(`Connected to Stripe account: ${account.id}`);
    
    // Perform initial data sync if this is a new installation
    if (process.env.INITIAL_SYNC === 'true') {
      console.log('Performing initial data sync...');
      await dataSync.syncAllData({
        limit: 1000,
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // Last 30 days
      });
      console.log('Initial sync completed');
    }
    
    console.log('Pepperlytics Data Connector ready');
  } catch (error) {
    console.error('Failed to initialize Pepperlytics Data Connector:', error);
    throw error;
  }
}

/**
 * Manual sync trigger for testing or admin purposes
 */
export async function triggerSync(options = {}) {
  try {
    await dataSync.syncAllData(options);
    return { success: true, message: 'Sync completed successfully' };
  } catch (error) {
    console.error('Manual sync failed:', error);
    return { success: false, error: error.message };
  }
}

// Auto-initialize if running directly
if (process.env.NODE_ENV !== 'test') {
  initialize().catch(console.error);
}