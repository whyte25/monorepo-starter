import { parseDocument } from "htmlparser2";

export function parseEditorContentOnServer(htmlString: string) {
  if (htmlString) {
    const document = parseDocument(htmlString);

    function extractTextFromDocument(node: any) {
      if (node.type === "text" && node.data.trim()) {
        return node.data.trim();
      }

      if (node.type === "tag") {
        return node.children
          .map(extractTextFromDocument)
          .filter(Boolean)
          .join(" ");
      }

      return "";
    }
    const extractedText = document.children
      .map(extractTextFromDocument)
      .filter(Boolean)
      .join(" ");

    return extractedText.trim();
  }

  return "";
}
