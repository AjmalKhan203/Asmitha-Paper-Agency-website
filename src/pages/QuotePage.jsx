import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import WhatsAppButton from "../components/WhatsAppButton";
import { PRODUCTS, getProductById } from "../data/products";
import { buildEnquiryMessage, buildWhatsAppUrl } from "../config/whatsapp";

const emptyValues = {
  fullName: "",
  companyName: "",
  whatsapp: "",
  email: "",
  location: "",
  deliveryLocation: "",
  productId: "",
  quantity: "",
  size: "",
  gsm: "",
  additional: "",
};

const tamilNaduDistricts = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivagangai",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thiruvallur",
  "Thiruvarur",
  "Thoothukudi",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Trichy",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold mb-2">
        {label}
        {required ? (
          <span className="text-sky-600" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="text-gray-400 font-normal text-sm"> (optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-red-500 text-xs mt-1" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full border rounded-xl px-4 py-3 outline-none focus:border-sky-600 focus:ring-2 focus:ring-sky-100";

function inputProps(id, error) {
  return {
    id,
    name: id,
    className: `${inputClass} ${error ? "border-red-500" : "border-gray-300"}`,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
  };
}

function validateField(field, value) {
  const trimmedValue = value.trim();

  if (field === "fullName") {
    if (!trimmedValue) return "Please enter your full name.";
    if (trimmedValue.length < 2)
      return "Full name must be at least 2 characters.";
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s.'’-]+$/.test(trimmedValue))
      return "Full name must contain letters only.";
  }

  if (field === "companyName") {
    if (!trimmedValue) return "Please enter your company name.";
    if (!/^[A-Za-z][A-Za-z0-9À-ÖØ-öø-ÿ\s&.,'’()-]*$/.test(trimmedValue))
      return "Company name must start with a letter and can include numbers, spaces, and common punctuation.";
  }

  if (field === "location") {
    if (!trimmedValue) return "Please enter your district or city.";
    if (trimmedValue.length < 2)
      return "Location must be at least 2 characters.";
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s.'’-]+$/.test(trimmedValue))
      return "Location must contain letters only.";
    if (!tamilNaduDistricts.some((district) => district.toLowerCase() === trimmedValue.toLowerCase())) {
      return "Please select a valid Tamil Nadu district or city.";
    }
  }

  if (field === "deliveryLocation") {
    if (!trimmedValue) return "Please enter the delivery location.";
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9\s,./#()-]{10,}$/.test(trimmedValue))
      return "Please enter a detailed delivery address with street/building, district, state, and country.";
    if ((trimmedValue.match(/,/g) || []).length < 2)
      return "Please include street/building, district, state, and country in the delivery address.";
  }

  if (field === "whatsapp") {
    if (!/^[0-9]{10}$/.test(trimmedValue))
      return "Please enter a valid 10-digit mobile number.";
  }
  if (field === "email") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue))
      return "Please enter a valid email address.";
  }
  if (field === "productId" && !trimmedValue)
    return "Please select a product.";
  if (field === "quantity" && !trimmedValue)
    return "Please select required quantity.";
  if (field === "size" && !trimmedValue)
    return "Please select size or width.";
  if (field === "gsm" && !trimmedValue)
    return "Please select GSM specification.";

  return "";
}

function displayOrDash(value) {
  return value?.trim() ? value : "—";
}

function QuoteForm({ initialProductId = "" }) {
  const navigate = useNavigate();
  const prefilledProduct = getProductById(initialProductId);
  const productLocked = Boolean(prefilledProduct);

  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    ...emptyValues,
    productId: prefilledProduct?.id ?? "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const selectedProduct = useMemo(
    () => getProductById(values.productId),
    [values.productId]
  );

  const update = (field) => (event) => {
    const nextValue = event.target.value;
    setValues((current) => ({ ...current, [field]: nextValue }));
    if (touched[field]) {
      const message = validateField(field, nextValue);
      setErrors((current) => {
        const next = { ...current };
        if (message) next[field] = message;
        else delete next[field];
        return next;
      });
    }
  };

  const validateCurrentField = (field) => {
    const message = validateField(field, values[field]);
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors((current) => {
      const next = { ...current };
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });
    return message;
  };

  const focusFirstInvalid = (fieldNames, nextErrors) => {
    const firstInvalidField = fieldNames.find((field) => nextErrors[field]);
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
    }
  };

  const validateStep1 = () => {
    const fields = [
      "fullName",
      "companyName",
      "whatsapp",
      "email",
      "location",
      "deliveryLocation",
    ];
    const next = Object.fromEntries(
      fields
        .map((field) => [field, validateField(field, values[field])])
        .filter(([, message]) => message)
    );
    setErrors(next);
    setTouched((current) => ({
      ...current,
      ...Object.fromEntries(fields.map((field) => [field, true])),
    }));
    focusFirstInvalid(fields, next);
    return Object.keys(next).length === 0;
  };

  const validateStep2 = () => {
    const fields = ["productId", "quantity", "size", "gsm"];
    const next = Object.fromEntries(
      fields
        .map((field) => [field, validateField(field, values[field])])
        .filter(([, message]) => message)
    );
    setErrors(next);
    setTouched((current) => ({
      ...current,
      ...Object.fromEntries(fields.map((field) => [field, true])),
    }));
    focusFirstInvalid(fields, next);
    return Object.keys(next).length === 0;
  };

  const goToReview = (event) => {
    event.preventDefault();
    if (validateStep2()) setStep(3);
  };

  const continueToOrder = (event) => {
    event.preventDefault();
    if (validateStep1()) setStep(2);
  };

  const validateAll = () => {
    const step1Fields = [
      "fullName",
      "companyName",
      "whatsapp",
      "email",
      "location",
      "deliveryLocation",
    ];
    const step2Fields = ["productId", "quantity", "size", "gsm"];
    const fields = [...step1Fields, ...step2Fields];
    const nextErrors = Object.fromEntries(
      fields
        .map((field) => [field, validateField(field, values[field])])
        .filter(([, message]) => message)
    );

    setErrors(nextErrors);
    setTouched((current) => ({
      ...current,
      ...Object.fromEntries(fields.map((field) => [field, true])),
    }));

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = fields.find((field) => nextErrors[field]);
      const invalidStep = step1Fields.includes(firstInvalidField) ? 1 : 2;
      setStep(invalidStep);
      setTimeout(() => document.getElementById(firstInvalidField)?.focus(), 0);
      return false;
    }

    return true;
  };

  const openWhatsApp = () => {
    if (!validateAll()) return;
    const message = buildEnquiryMessage(values);
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
      <ol className="flex flex-wrap gap-3 mb-8 text-sm" aria-label="Quote steps">
        {[
          { n: 1, label: "Customer details" },
          { n: 2, label: "Order requirements" },
          { n: 3, label: "Review" },
        ].map((item) => (
          <li
            key={item.n}
            className={`px-3 py-1 rounded-full ${
              step === item.n
                ? "bg-sky-600 text-white"
                : step > item.n
                ? "bg-sky-100 text-sky-800"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {item.n}. {item.label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <form
          name="quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={continueToOrder}
          noValidate
        >
          <input type="hidden" name="form-name" value="quote" />
          <p hidden>
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>
          <h2 className="text-2xl font-bold mb-6">Customer Details</h2>
          <div className="space-y-5">
            <Field id="fullName" label="Full Name" required error={errors.fullName}>
              <input
                {...inputProps("fullName", errors.fullName)}
                type="text"
                autoComplete="name"
                minLength="2"
                maxLength="120"
                pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s.'’-]+$"
                title="Full name must contain letters only."
                aria-required="true"
                required
                value={values.fullName}
                onChange={update("fullName")}
                onBlur={() => validateCurrentField("fullName")}
              />
            </Field>

            <Field
              id="companyName"
              label="Company Name"
              required
              error={errors.companyName}
            >
              <input
                {...inputProps("companyName", errors.companyName)}
                type="text"
                autoComplete="organization"
                maxLength="120"
                pattern="^[A-Za-z][A-Za-z0-9À-ÖØ-öø-ÿ\s&.,'’()-]*$"
                title="Company name must start with a letter and can include numbers, spaces, and common punctuation."
                aria-required="true"
                required
                value={values.companyName}
                onChange={update("companyName")}
                onBlur={() => validateCurrentField("companyName")}
              />
            </Field>

            <Field
              id="whatsapp"
              label="WhatsApp / Mobile Number"
              required
              error={errors.whatsapp}
            >
              <input
                {...inputProps("whatsapp", errors.whatsapp)}
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit mobile number."
                maxLength="10"
                aria-required="true"
                required
                value={values.whatsapp}
                onChange={update("whatsapp")}
                onBlur={() => validateCurrentField("whatsapp")}
              />
            </Field>

            <Field id="email" label="Email" required error={errors.email}>
              <input
                {...inputProps("email", errors.email)}
                type="email"
                autoComplete="email"
                maxLength="160"
                aria-required="true"
                required
                value={values.email}
                onChange={update("email")}
                onBlur={() => validateCurrentField("email")}
              />
            </Field>

            <Field id="location" label="Location" required error={errors.location}>
              <input
                {...inputProps("location", errors.location)}
                type="text"
                list="tamilnadu-districts"
                autoComplete="address-level2"
                minLength="2"
                maxLength="50"
                placeholder="Tiruppur"
                pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s.'’-]+$"
                title="Select or type a Tamil Nadu district or city."
                aria-required="true"
                required
                value={values.location}
                onChange={update("location")}
                onBlur={() => validateCurrentField("location")}
              />
              <datalist id="tamilnadu-districts">
                {tamilNaduDistricts.map((district) => (
                  <option key={district} value={district} />
                ))}
              </datalist>
            </Field>

            <Field
              id="deliveryLocation"
              label="Delivery Location"
              required
              error={errors.deliveryLocation}
            >
              <textarea
                {...inputProps("deliveryLocation", errors.deliveryLocation)}
                rows={3}
                wrap="soft"
                minLength="10"
                maxLength="250"
                placeholder="No. 12, Raja Street, Tiruppur, Tamil Nadu, India"
                title="Enter a detailed delivery address with street/building, district, state, and country."
                aria-required="true"
                required
                value={values.deliveryLocation}
                onChange={update("deliveryLocation")}
                onBlur={() => validateCurrentField("deliveryLocation")}
                className={`${inputClass} ${errors.deliveryLocation ? "border-red-500" : "border-gray-300"} min-h-[88px] resize-y whitespace-pre-wrap`}
              />
            </Field>
          </div>

          <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="border px-6 py-3 rounded-full hover:bg-gray-100"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 font-semibold"
            >
              Continue →
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form
          name="quote"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={goToReview}
          noValidate
        >
          <input type="hidden" name="form-name" value="quote" />
          <p hidden>
            <label>
              Don&apos;t fill this out: <input name="bot-field" />
            </label>
          </p>
          <h2 className="text-2xl font-bold mb-6">Order Requirements</h2>
          <div className="space-y-5">
            <Field id="productId" label="Product" required error={errors.productId}>
              {productLocked && selectedProduct ? (
                <p
                  id="productId"
                  className="w-full border border-sky-200 bg-sky-50 rounded-xl px-4 py-3 font-semibold text-sky-900"
                >
                  {selectedProduct.title} ✓
                </p>
              ) : (
                <select
                  {...inputProps("productId", errors.productId)}
                  aria-required="true"
                  required
                  value={values.productId}
                  onChange={update("productId")}
                  onBlur={() => validateCurrentField("productId")}
                >
                  <option value="" disabled hidden>
                    Select a product
                  </option>
                  {PRODUCTS.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.title}
                    </option>
                  ))}
                </select>
              )}
            </Field>

            <Field
              id="quantity"
              label="Required Quantity"
              required
              error={errors.quantity}
            >
              <select
                {...inputProps("quantity", errors.quantity)}
                aria-required="true"
                required
                value={values.quantity}
                onChange={update("quantity")}
                onBlur={() => validateCurrentField("quantity")}
              >
                <option value="" disabled hidden>
                  Select quantity
                </option>
                <option value="Small quantity">Small quantity</option>
                <option value="Medium quantity">Medium quantity</option>
                <option value="Bulk quantity">Bulk quantity</option>
                <option value="Regular business supply">
                  Regular business supply
                </option>
              </select>
            </Field>

            <Field id="size" label="Required Size / Width" required error={errors.size}>
              <select
                {...inputProps("size", errors.size)}
                required
                value={values.size}
                onChange={update("size")}
                onBlur={() => validateCurrentField("size")}
              >
                <option value="" disabled hidden>
                  Select size or width
                </option>
                <option value="36 Inches">36 Inches</option>
                <option value="48 Inches">48 Inches</option>
                <option value="60 Inches">60 Inches</option>
                <option value="63 Inches">63 Inches</option>
                <option value="Custom size or width">Custom size or width</option>
              </select>
            </Field>

            <Field
              id="gsm"
              label="GSM (paper weight) / Specification"
              required
              error={errors.gsm}
            >
              <select
                {...inputProps("gsm", errors.gsm)}
                required
                value={values.gsm}
                onChange={update("gsm")}
                onBlur={() => validateCurrentField("gsm")}
              >
                <option value="" disabled hidden>
                  Select GSM (paper weight) or specification
                </option>
                <option value="40 - 60 GSM">40 - 60 GSM</option>
                <option value="60 - 80 GSM">60 - 80 GSM</option>
                <option value="80 - 120 GSM">80 - 120 GSM</option>
                <option value="Custom GSM or specification">
                  Custom GSM or specification
                </option>
              </select>
            </Field>

            <Field
              id="additional"
              label="Additional Requirements"
              error={errors.additional}
            >
              <textarea
                {...inputProps("additional", errors.additional)}
                rows="5"
                maxLength="500"
                placeholder="e.g., Specify machine models like Gerber Paragon, Lectra Vector, or special core weight restrictions..."
                value={values.additional}
                onChange={update("additional")}
              />
            </Field>
          </div>

          <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
            <button
              type="button"
              onClick={() => {
                setErrors({});
                setStep(1);
              }}
              className="border px-6 py-3 rounded-full hover:bg-gray-100"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 font-semibold"
            >
              Review Enquiry →
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Review your enquiry</h2>
          <p className="text-gray-600 mb-8">
            Check the details below. WhatsApp will open with this message ready to
            send. You will still need to press Send in WhatsApp.
          </p>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-4">Customer Details</h3>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
              <div>
                <dt className="text-sm text-gray-500">Name</dt>
                <dd className="font-medium">{values.fullName}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Company</dt>
                <dd className="font-medium">{values.companyName}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">WhatsApp</dt>
                <dd className="font-medium">{values.whatsapp}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Email</dt>
                <dd className="font-medium">{displayOrDash(values.email)}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Location</dt>
                <dd className="font-medium">{values.location}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Delivery Location</dt>
                <dd className="font-medium whitespace-pre-wrap">
                  {displayOrDash(values.deliveryLocation)}
                </dd>
              </div>
            </dl>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold mb-4">Order Requirements</h3>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
              <div>
                <dt className="text-sm text-gray-500">Product</dt>
                <dd className="font-medium">{selectedProduct?.title}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Quantity</dt>
                <dd className="font-medium">{values.quantity}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Required Size / Width</dt>
                <dd className="font-medium">{displayOrDash(values.size)}</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">
                  GSM (paper weight) / Specification
                </dt>
                <dd className="font-medium">{displayOrDash(values.gsm)}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm text-gray-500">Additional Requirements</dt>
                <dd className="font-medium whitespace-pre-wrap">
                  {displayOrDash(values.additional)}
                </dd>
              </div>
            </dl>
          </section>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="border px-6 py-3 rounded-full hover:bg-gray-100"
            >
              ← Edit
            </button>
            <button
              type="button"
              onClick={openWhatsApp}
              className="bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 font-semibold"
            >
              Send Enquiry on WhatsApp →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function QuotePage() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product") ?? "";
  const selected = getProductById(productId);

  return (
    <Layout
      seo={{
        title: "Request a Bulk Paper Roll Quote | Asmitha Paper Agency",
        description:
          "Request a B2B quote for brown kraft paper, perforated paper rolls, or plain catering table rolls with your required size, GSM, quantity, and delivery location.",
        path: "/quote",
      }}
    >
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center pt-8 animate-fade-up">
          <p className="text-sky-600 font-semibold mb-3">
            B2B Bulk Orders & Business Inquiries
          </p>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Request a Bulk Paper Roll Quote
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Share your business paper requirements and we will open WhatsApp
            with a ready bulk-order enquiry. We deliver across Tiruppur and
            other districts.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div className="animate-fade-up">
            <h2 className="text-3xl font-bold mb-8">Why request a quote?</h2>

            <div className="space-y-5 text-gray-600 leading-8">
              <p>✔ Brown kraft paper</p>
              <p>✔ Perforated pattern and packaging paper</p>
              <p>✔ Plain catering table roll</p>
              <p>✔ Delivery across Tiruppur</p>
              <p>✔ Delivery available across Tiruppur and other districts</p>
            </div>

            <div className="mt-10 bg-gray-100 rounded-3xl p-6">
              <p className="font-semibold mb-3">Prefer to chat directly?</p>
              <p className="text-gray-600 mb-5">
                If you already know what you need, message APA on WhatsApp
                without filling the form.
              </p>
              <WhatsAppButton className="inline-block bg-white border px-5 py-3 rounded-full hover:bg-gray-50 font-semibold" />
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <QuoteForm
              key="quote-form"
              initialProductId={selected?.id ?? ""}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}