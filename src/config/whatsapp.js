import { PRODUCTS } from "../data/products";
import { PRIMARY_PHONE_NUMBER } from "./business";

export const APA_WHATSAPP_NUMBER = PRIMARY_PHONE_NUMBER;

export const DIRECT_WHATSAPP_MESSAGE =
  "Hello Asmitha Paper Agency, I would like to know more about your paper products.";

function cleanMessageValue(value, maxLength = 300) {
  return String(value ?? "")
    .replace(/[\r\n\t]/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function buildWhatsAppUrl(message, phoneNumber = APA_WHATSAPP_NUMBER) {
  const text = encodeURIComponent(message);
  const phone = String(phoneNumber).replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildEnquiryMessage(values) {
  const companyName = cleanMessageValue(values.companyName, 120);
  const fullName = cleanMessageValue(values.fullName, 120);
  const location = cleanMessageValue(values.location, 160);
  const gsm = cleanMessageValue(values.gsm, 80);
  const size = cleanMessageValue(values.size, 80);
  const additional = cleanMessageValue(values.additional, 500);
  const quantity = cleanMessageValue(values.quantity, 100);
  const deliveryLocation = cleanMessageValue(values.deliveryLocation, 160);
  const selectedProd = PRODUCTS.find(
    (product) => product.id === cleanMessageValue(values.productId, 80)
  );

  return (
    `*ASMITA PAPER AGENCY - B2B PAPER ORDER SHEET*\n` +
    `----------------------------------------\n\n` +
    `*BUYER IDENTITY PROFILE:*\n` +
    `• Company: ${companyName}\n` +
    `• Procurement Executive: ${fullName}\n` +
    `• Customer Location: ${location || "Tiruppur"}\n\n` +
    `*PAPER REQUIREMENTS:*\n` +
    `• Selected Paper: ${selectedProd ? selectedProd.title : "Custom Paper Requirement"}\n` +
    `• GSM (paper weight) / Specification: ${gsm || "As required"}\n` +
    `• Size / Width: ${size || "As required"}\n` +
    `• Special Instructions: ${additional || "None"}\n\n` +
    `*PROJECTIONS & LOGISTICS:*\n` +
    `• Required Quantity: ${quantity}\n` +
    `• Delivery Location: ${deliveryLocation || "Tiruppur"}\n` +
    `• Delivery Note: Delivery charges will be added as an extra cost for delivery across Tamil Nadu, based on distance. We provide safe, labour-assisted doorstep delivery to your delivery location.\n\n` +
    `----------------------------------------\n` +
    `_Sent via Asmitha Paper Agency (APA) Live Spec Engine_`
  );
}
