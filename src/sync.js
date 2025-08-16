/**
 * Data synchronization service for Stripe to Pepperlytics
 * Handles periodic sync of historical data and real-time updates
 */

const PEPPERLYTICS_API_URL = process.env.PEPPERLYTICS_API_URL || 'https://api.pepperlytics.com';

export class StripeDataSync {
  constructor(stripeClient) {
    this.stripe = stripeClient;
  }

  /**
   * Sync all relevant Stripe data to Pepperlytics
   */
  async syncAllData(options = {}) {
    const { limit = 100, startDate } = options;
    
    try {
      await Promise.all([
        this.syncCustomers(limit, startDate),
        this.syncCharges(limit, startDate),
        this.syncCheckoutSessions(limit, startDate),
        this.syncPaymentIntents(limit, startDate)
      ]);
      
      console.log('Full data sync completed successfully');
    } catch (error) {
      console.error('Data sync failed:', error);
      throw error;
    }
  }

  /**
   * Sync customer data
   */
  async syncCustomers(limit = 100, startDate) {
    const params = { limit };
    if (startDate) {
      params.created = { gte: Math.floor(startDate.getTime() / 1000) };
    }

    const customers = await this.stripe.customers.list(params);
    
    for (const customer of customers.data) {
      await this.sendCustomerToPepperlytics(customer);
    }
  }

  /**
   * Sync charge data
   */
  async syncCharges(limit = 100, startDate) {
    const params = { limit };
    if (startDate) {
      params.created = { gte: Math.floor(startDate.getTime() / 1000) };
    }

    const charges = await this.stripe.charges.list(params);
    
    for (const charge of charges.data) {
      if (charge.status === 'succeeded') {
        await this.sendChargeToPepperlytics(charge);
      }
    }
  }

  /**
   * Sync checkout sessions
   */
  async syncCheckoutSessions(limit = 100, startDate) {
    const params = { limit };
    if (startDate) {
      params.created = { gte: Math.floor(startDate.getTime() / 1000) };
    }

    const sessions = await this.stripe.checkout.sessions.list(params);
    
    for (const session of sessions.data) {
      if (session.payment_status === 'paid') {
        await this.sendSessionToPepperlytics(session);
      }
    }
  }

  /**
   * Sync payment intents
   */
  async syncPaymentIntents(limit = 100, startDate) {
    const params = { limit };
    if (startDate) {
      params.created = { gte: Math.floor(startDate.getTime() / 1000) };
    }

    const paymentIntents = await this.stripe.paymentIntents.list(params);
    
    for (const paymentIntent of paymentIntents.data) {
      if (paymentIntent.status === 'succeeded') {
        await this.sendPaymentIntentToPepperlytics(paymentIntent);
      }
    }
  }

  async sendCustomerToPepperlytics(customer) {
    const data = {
      type: 'customer_sync',
      stripe_customer_id: customer.id,
      email: customer.email,
      name: customer.name,
      created: customer.created,
      metadata: customer.metadata,
      timestamp: new Date().toISOString()
    };

    await this.sendToPepperlytics(data);
  }

  async sendChargeToPepperlytics(charge) {
    const data = {
      type: 'charge_sync',
      stripe_charge_id: charge.id,
      customer_id: charge.customer,
      amount: charge.amount,
      currency: charge.currency,
      created: charge.created,
      metadata: charge.metadata,
      timestamp: new Date().toISOString()
    };

    await this.sendToPepperlytics(data);
  }

  async sendSessionToPepperlytics(session) {
    const data = {
      type: 'session_sync',
      stripe_session_id: session.id,
      customer_id: session.customer,
      amount_total: session.amount_total,
      currency: session.currency,
      created: session.created,
      metadata: session.metadata,
      timestamp: new Date().toISOString()
    };

    await this.sendToPepperlytics(data);
  }

  async sendPaymentIntentToPepperlytics(paymentIntent) {
    const data = {
      type: 'payment_intent_sync',
      stripe_payment_intent_id: paymentIntent.id,
      customer_id: paymentIntent.customer,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      created: paymentIntent.created,
      metadata: paymentIntent.metadata,
      timestamp: new Date().toISOString()
    };

    await this.sendToPepperlytics(data);
  }

  async sendToPepperlytics(data) {
    try {
      const response = await fetch(`${PEPPERLYTICS_API_URL}/stripe/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.PEPPERLYTICS_API_KEY}`
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Sync data sent to Pepperlytics:', data.type);
    } catch (error) {
      console.error('Failed to send sync data to Pepperlytics:', error);
      throw error;
    }
  }
}