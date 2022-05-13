const formatRegexes = [
  /https:\/\/drive\.google\.com\/file\/d\/(?<id>.*?)\/(?:edit|view)\?usp=sharing/,
  /https:\/\/drive\.google\.com\/open\?id=(?<id>.*?)$/,
];

const alphanumericRegex = /^[\w-]+$/;

function extractId(urlOrId: string) {
  for (const format of formatRegexes) {
    if (format.test(urlOrId)) {
      const result = format.exec(urlOrId);

      return result?.groups?.id;
    }
  }

  if (alphanumericRegex.test(urlOrId)) {
    return urlOrId;
  }

  throw new Error("Invalid URL provided.");
}

export interface DriveOptions {
  /**
	A Drive api key that can be used to exceed the download limit of 100MB.
	*/
  apiKey?: string;
}

/**
Generate a Google Drive direct download link based on the URL or ID.

@param URLorID The URL or ID of the drive content.

@example
```javascript
driveLink('https://drive.google.com/file/d/1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk/view?usp=sharing');

//=> 'https://drive.google.com/uc?export=download&id=1Px8bePd7pFSz5r6bTA7GKN9HloCzMfFk'
```
*/
export function driveLink(URLorID: string, { apiKey }: DriveOptions = {}) {
  if (typeof URLorID !== "string") {
    throw new TypeError("Invalid URL Provided.");
  }

  if (typeof apiKey === "string" && !alphanumericRegex.test(apiKey)) {
    throw new TypeError("Invalid API key provided");
  }

  const id = extractId(URLorID.trim());

  const parsedKey = apiKey?.trim();

  return parsedKey
    ? `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${parsedKey}`
    : `https://drive.google.com/uc?export=download&id=${id}`;
}
