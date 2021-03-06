export interface Contact {
  name: string;
  email?: string;
  organizationPhone?: string;
  primaryPhone?: string;
}

export function contactFromJsonResponse(object: Record<string, any>): Contact {
  return {
    name: object.name,
    email: object.email,
    organizationPhone: object.organizationPhone,
    primaryPhone: object.primaryPhone,
  };
}
