import type { InsertContact } from "@/lib/db/schema";

interface HubSpotContact {
  properties: {
    email: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    company?: string;
    message?: string;
    hs_lead_status?: string;
    lifecyclestage?: string;
    lead_source?: string;
  };
}

interface HubSpotResponse {
  id: string;
  properties: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  archived: boolean;
}

export class HubSpotService {
  private apiKey: string;
  private portalId: string;
  private baseUrl: string;

  constructor() {
    this.apiKey = process.env.HUBSPOT_API_KEY || '';
    this.portalId = process.env.HUBSPOT_PORTAL_ID || '';
    this.baseUrl = 'https://api.hubapi.com';
  }

  private isConfigured(): boolean {
    return !!(this.apiKey && this.portalId);
  }

  private parseFullName(name: string): { firstname?: string; lastname?: string } {
    if (!name) return {};
    const nameParts = name.trim().split(' ');
    if (nameParts.length === 1) return { firstname: nameParts[0] };
    return { firstname: nameParts[0], lastname: nameParts.slice(1).join(' ') };
  }

  private mapContactToHubSpot(contact: InsertContact): HubSpotContact {
    const nameFields = this.parseFullName(contact.name);
    const properties: HubSpotContact["properties"] & Record<string, string> = {
      email: contact.email,
      lifecyclestage: 'lead',
    };

    if (nameFields.firstname) properties.firstname = nameFields.firstname;
    if (nameFields.lastname) properties.lastname = nameFields.lastname;
    if (contact.phone?.trim()) properties.phone = contact.phone.trim();
    if (contact.company?.trim()) properties.company = contact.company.trim();

    if (contact.service || contact.message) {
      const websiteNote = [];
      if (contact.service?.trim()) websiteNote.push(`Service: ${contact.service.trim()}`);
      if (contact.message?.trim()) websiteNote.push(contact.message.trim());
      properties.website = websiteNote.join(' | ');
    }

    return { properties };
  }

  async createContact(contact: InsertContact): Promise<HubSpotResponse | null> {
    if (!this.isConfigured()) return null;

    try {
      const hubspotContact = this.mapContactToHubSpot(contact);
      const response = await fetch(`${this.baseUrl}/crm/v3/objects/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotContact),
      });

      if (!response.ok) {
        const errorText = await response.text();
        if (response.status === 409) {
          const existingContactMatch = errorText.match(/Existing ID: (\d+)/);
          if (existingContactMatch) {
            const existingId = existingContactMatch[1];
            const updateResponse = await fetch(`${this.baseUrl}/crm/v3/objects/contacts/${existingId}`, {
              method: 'PATCH',
              headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(hubspotContact),
            });

            if (updateResponse.ok) return updateResponse.json();
            return { id: existingId, properties: {}, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), archived: false };
          }
          return null;
        }
        throw new Error(`HubSpot API request failed: ${response.status} ${errorText}`);
      }

      return response.json();
    } catch (error) {
      console.error('Error creating HubSpot contact:', error);
      throw error;
    }
  }
}

export const hubspotService = new HubSpotService();
