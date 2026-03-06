"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  halfWidth?: boolean;
}

interface HubSpotNativeFormProps {
  portalId?: string;
  formId: string;
  fields: FormField[];
  submitLabel?: string;
  successMessage?: string;
}

export default function HubSpotNativeForm({
  portalId = "485253",
  formId,
  fields,
  submitLabel = "Submit Application",
  successMessage = "Thank you! Your application has been submitted successfully. We'll be in touch soon.",
}: HubSpotNativeFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = { honeypot: "" };
    fields.forEach((f) => (initial[f.name] = ""));
    return initial;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setIsSubmitting(true);
    setErrorMessage("");

    const hubspotFields = fields
      .filter((f) => formData[f.name]?.trim())
      .map((f) => ({
        name: f.name,
        value: formData[f.name].trim(),
      }));

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: hubspotFields,
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (res.ok) {
        setSubmitStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        setErrorMessage(
          data?.message || "Something went wrong. Please try again."
        );
        setSubmitStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-charcoal-900">
          <Send className="w-7 h-7 text-charcoal-900" />
        </div>
        <h3 className="font-display text-2xl text-charcoal-900 mb-3">Application Submitted!</h3>
        <p className="text-stone-600 max-w-md mx-auto">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {fields.map((field) => {
          const isFullWidth = !field.halfWidth || field.type === "textarea";
          return (
            <div key={field.name} className={isFullWidth ? "md:col-span-2" : ""}>
              <label
                htmlFor={`hs-${formId}-${field.name}`}
                className="block text-sm font-bold text-charcoal-900 mb-2 uppercase tracking-wide"
              >
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={`hs-${formId}-${field.name}`}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white resize-vertical"
                />
              ) : field.type === "select" ? (
                <select
                  id={`hs-${formId}-${field.name}`}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                >
                  <option value="">Select...</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={`hs-${formId}-${field.name}`}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors text-charcoal-900 bg-white"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`hs-${formId}-honeypot`}>Leave this blank</label>
        <input
          type="text"
          id={`hs-${formId}-honeypot`}
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-red-700 text-center text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-400 text-charcoal-900 border-2 border-charcoal-900 shadow-offset font-bold text-lg py-3 px-8 rounded-lg hover:bg-yellow-300 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
      >
        {isSubmitting ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
