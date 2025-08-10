export default function handler(req, res){
  // Demo webhook receiver for Tele-birr payment confirmation.
  // Validate signature in production.
  const event = req.body;
  console.log('Tele-birr webhook event:', event);
  // Here you'd update order status in DB.
  res.status(200).json({ received: true });
}
