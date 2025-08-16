/**
 * Stripe webhook handler for Pepperlytics data sync
 * Handles incoming Stripe events and forwards data to Pepperlytics
 */

const PEPPERLYTICS_API_URL = process.env.PEPPERLYTICS_API_URL || 'https://api.pepperlytics.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const event = req.body;
    
    // Handle relevant Stripe events
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object);
        break;
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object);
        break;
      case 'customer.created':
        await handleCustomerCreated(event.data.object);
        break;
      case 'charge.succeeded':
        await handleChargeSucceeded(event.data.object);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}

async function handleCheckoutCompleted(session) {
  const data = {
    type: 'checkout_completed',
    stripe_session_id: session.id,
    customer_id: session.customer,
    amount_total: session.amount_total,
    currency: session.currency,
    metadata: session.metadata,
    timestamp: new Date().toISOString()
  };

  await sendToPepperlytics(data);
}

async function handlePaymentSucceeded(paymentIntent) {
  const data = {
    type: 'payment_succeeded',
    stripe_payment_intent_id: paymentIntent.id,
    customer_id: paymentIntent.customer,
    amount: paymentIntent.amount,
    currency: paymentIntent.currency,
    metadata: paymentIntent.metadata,
    timestamp: new Date().toISOString()
  };

  await sendToPepperlytics(data);
}

async function handleCustomerCreated(customer) {
  const data = {
    type: 'customer_created',
    stripe_customer_id: customer.id,
    email: customer.email,
    name: customer.name,
    metadata: customer.metadata,
    timestamp: new Date().toISOString()
  };

  await sendToPepperlytics(data);
}

async function handleChargeSucceeded(charge) {
  const data = {
    type: 'charge_succeeded',
    stripe_charge_id: charge.id,
    customer_id: charge.customer,
    amount: charge.amount,
    currency: charge.currency,
    metadata: charge.metadata,
    timestamp: new Date().toISOString()
  };

  await sendToPepperlytics(data);
}

async function sendToPepperlytics(data) {
  try {
    const response = await fetch(`${PEPPERLYTICS_API_URL}/stripe/webhook`, {
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

    console.log('Data sent to Pepperlytics successfully:', data.type);
  } catch (error) {
    console.error('Failed to send data to Pepperlytics:', error);
    throw error;
  }
}