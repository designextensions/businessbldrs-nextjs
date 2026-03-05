const BASE_URL = "https://businessbldrs.com";
const MAX_TITLE_LENGTH = 100;
const MAX_DESC_LENGTH = 200;

export function getOgImageUrl(title: string, description?: string): string {
  const truncatedTitle = title.length > MAX_TITLE_LENGTH
    ? title.slice(0, MAX_TITLE_LENGTH - 3) + "..."
    : title;

  const params = new URLSearchParams({ title: truncatedTitle });

  if (description) {
    const truncatedDesc = description.length > MAX_DESC_LENGTH
      ? description.slice(0, MAX_DESC_LENGTH - 3) + "..."
      : description;
    params.set("description", truncatedDesc);
  }

  return `${BASE_URL}/api/og?${params.toString()}`;
}
