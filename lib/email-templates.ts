interface InvoiceEmailTemplateInput {
  businessName: string;
  invoiceNumber: string;
  clientName: string;
  amount: string;
  dueDate: string;
  payUrl: string;
}

export function invoiceEmailHtml(input: InvoiceEmailTemplateInput) {
  return `
  <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827;">
    <h1 style="font-size: 24px; margin-bottom: 8px;">Invoice ${input.invoiceNumber}</h1>
    <p style="margin: 0 0 16px; color: #4b5563;">Hi ${input.clientName},</p>
    <p style="margin: 0 0 16px; color: #4b5563;">
      ${input.businessName} has sent you an invoice for <strong>${input.amount}</strong> due on ${input.dueDate}.
    </p>
    <a href="${input.payUrl}" style="display: inline-block; background: #0f766e; color: #ffffff; padding: 10px 16px; border-radius: 8px; text-decoration: none; font-weight: 600;">Pay Invoice</a>
    <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">If you have questions, reply to this email.</p>
  </div>`;
}
