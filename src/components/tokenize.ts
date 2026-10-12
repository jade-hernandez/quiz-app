const keywords = [
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "default",
  "break",
  "continue",
  "new",
  "typeof",
  "instanceof",
  "in",
  "of",
  "import",
  "export",
  "from",
  "class",
  "extends",
  "this",
  "void",
  "delete",
  "async",
  "await",
  "try",
  "catch",
  "finally",
  "throw",
  "true",
  "false",
  "null",
  "undefined",
];

const kinds = [
  "comment",
  "string",
  "number",
  "tag",
  "keyword",
  "call",
] as const;

export type TokenKind = (typeof kinds)[number] | "plain";

type Token = {
  readonly kind: TokenKind;
  readonly text: string;
};

const patterns: Record<(typeof kinds)[number], RegExp> = {
  comment: /\/\/.*$/,
  string: /`(?:[^`\\]|\\.)*`|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/,
  number: /\b\d+(?:\.\d+)?\b/,
  tag: /<\/?>|<\/?[A-Za-z][\w.]*|\/>|(?<=[^\s=])>(?!=)/,
  keyword: new RegExp(`(?<![.\\w$])\\b(?:${keywords.join("|")})\\b`),
  call: /\b[A-Za-z_$][\w$]*(?=\()/,
};

const pattern = new RegExp(
  kinds.map((kind) => `(?<${kind}>${patterns[kind].source})`).join("|"),
  "g",
);

export function tokenize(line: string): readonly Token[] {
  const tokens: Token[] = [];
  let end = 0;

  for (const match of line.matchAll(pattern)) {
    if (match.index > end) {
      tokens.push({ kind: "plain", text: line.slice(end, match.index) });
    }
    const kind = kinds.find((name) => match.groups?.[name] !== undefined);
    tokens.push({ kind: kind ?? "plain", text: match[0] });
    end = match.index + match[0].length;
  }

  if (end < line.length) {
    tokens.push({ kind: "plain", text: line.slice(end) });
  }
  return tokens;
}
