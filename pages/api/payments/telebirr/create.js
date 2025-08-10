export default function handler(req, res){
  // Demo: create a Tele-birr payment request
  // Replace with real Tele-birr SDK calls and merchant credentials
  const { amount, orderId } = req.body || {};
  const fakePaymentUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/telebirr/redirect?orderId=${orderId}`;
  res.status(200).json({ success:true, paymentUrl: fakePaymentUrl, mode: 'test' });
}
