export default function handler(req, res){
  // Demo CBE flow: return bank transfer details + placeholder reference
  const orderId = req.body?.orderId || 'ord_demo_1';
  const bankInfo = {
    accountName: process.env.CBE_ACCOUNT_NAME || 'Wave Store',
    accountNumber: process.env.CBE_ACCOUNT_NUMBER || '0000000000',
    bankName: process.env.CBE_BANK_NAME || 'Commercial Bank of Ethiopia',
    reference: `CBE-${orderId}`
  };
  res.status(200).json({ success:true, bankInfo });
}
