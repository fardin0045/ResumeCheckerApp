const { GoogleGenAI, Type } = require('@google/genai');
const { z } = require('zod');

const env = require('../config/env');

const ai = env.geminiApiKey
  ? new GoogleGenAI({ apiKey: env.geminiApiKey })
  : null;

const linkSchema = {
  type: Type.OBJECT,
  required: ['label', 'url'],
  properties: {
    label: { type: Type.STRING },
    url: { type: Type.STRING },
  },
};
const responseSchema = {
  type: Type.OBJECT,
  required: [
    'basics',
    'summary',
    'experience',
    'education',
    'skills',
    'projects',
    'certifications',
    'languages',
    'interests',
  ],
  properties: {
    basics: {
      type: Type.OBJECT,
      required: ['name', 'title', 'location', 'email', 'phone', 'links'],
      properties: {
        name: { type: Type.STRING },
        title: { type: Type.STRING },
        location: { type: Type.STRING },
        email: { type: Type.STRING },
        phone: { type: Type.STRING },
        links: {
          type: Type.ARRAY,
          items: linkSchema,
        },
      },
    },

    summary: {
      type: Type.STRING,
    },

    experience: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        required: ['company', 'role', 'period', 'bullets'],
        properties: {
          company: { type: Type.STRING },
          role: { type: Type.STRING },
          location: { type: Type.STRING },
          period: { type: Type.STRING },
          bullets: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
        },
      },
    },

    education: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        required: ['degree', 'school', 'period'],
        properties: {
          degree: { type: Type.STRING },
          school: { type: Type.STRING },
          location: { type: Type.STRING },
          period: { type: Type.STRING },
          details: { type: Type.STRING },
        },
      },
    },

    skills: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },

    projects: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        required: ['name', 'description'],
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          tech: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          links: {
            type: Type.ARRAY,
            items: linkSchema,
          },
        },
      },
    },

    certifications: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        required: ['name'],
        properties: {
          name: { type: Type.STRING },
          issuer: { type: Type.STRING },
          year: { type: Type.STRING },
        },
      },
    },

    languages: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },

    interests: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
  },
};

const validator = z.object({
  basics: z.object({
    name: z.string().default(''),
    title: z.string().default(''),
    location: z.string().default(''),
    email: z.string().default(''),
    phone: z.string().default(''),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
        }),
      )
      .default([]),
  }),

  summary: z.string().default(''),

  experience: z
    .array(
      z.object({
        company: z.string().default(''),
        role: z.string().default(''),
        location: z.string().default(''),
        period: z.string().default(''),
        bullets: z.array(z.string()).default([]),
      }),
    )
    .default([]),

  education: z
    .array(
      z.object({
        degree: z.string().default(''),
        school: z.string().default(''),
        location: z.string().default(''),
        period: z.string().default(''),
        details: z.string().default(''),
      }),
    )
    .default([]),

  skills: z.array(z.string()).default([]),

  projects: z
    .array(
      z.object({
        name: z.string().default(''),
        description: z.string().default(''),
        tech: z.array(z.string()).default([]),
        links: z
          .array(
            z.object({
              label: z.string(),
              url: z.string(),
            }),
          )
          .default([]),
      }),
    )
    .default([]),

  certifications: z
    .array(
      z.object({
        name: z.string().default(''),
        issuer: z.string().default(''),
        year: z.string().default(''),
      }),
    )
    .default([]),

  languages: z.array(z.string()).default([]),
  interests: z.array(z.string()).default([]),
});
function buildPrompt(rawText) {
  return [
    'You are a resume parser. The input is text extracted from a PDF and lines may be jumbled or out of natural reading order.',
    '',
    'Extract structured resume data.',
    '',
    '- basics: name, professional title, location, email, phone, and social links',
    '- summary: professional summary, rejoining lines when necessary',
    '- experience: company, role, period, location, and bullet points',
    '- education: degree, school, period, location, and details',
    '',
    '- skills: extract ALL explicitly mentioned skills and preserve them carefully.',
    '  Include:',
    '  - programming languages',
    '  - frameworks and libraries',
    '  - databases',
    '  - tools and platforms',
    '  - cloud/devops technologies',
    '  - technical concepts',
    '  - relevant professional skills',
    '',
    '  IMPORTANT:',
    '  - Prioritize the dedicated Skills section when identifying skills.',
    '  - Do not drop skills just because they also appear in projects or experience.',
    '  - Do not infer skills that are not explicitly mentioned.',
    '  - Preserve the original skill names.',
    '',
    '- projects: name, description, explicitly mentioned technologies, and links',
    '- certifications: name, issuer, year',
    '- languages: flat array',
    '- interests: flat array',
    '',
    'Rules:',
    '- Be conservative and never invent information.',
    '- Use empty strings or arrays when information is missing.',
    '- Do not paraphrase extracted information unless needed to reconstruct broken PDF lines.',
    '- Preserve original date formats.',
    '- Keep Skills separate from Projects and Experience.',
    '',
    'RESUME TEXT:',
    '---',
    rawText,
    '---',
  ].join('\n');
}
const EMPTY = {
    basics: {
    name: "",
    title: "",
    location: "",
    email: "",
    phone: "",
    links: [],
  },
  summary: "",
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  interests: [],
};

async function parseResume(rawText) {
  if (!ai || !rawText?.trim()) return EMPTY;

  const prompt = buildPrompt(rawText);

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
  const result = await ai.models.generateContent({
    model: env.geminiModel,
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    config: {
      responseMimeType: "application/json",
      responseSchema,
      temperature: 0.1,
    },
  });

  const text = result?.text;

  console.log("Gemini response text:");
  console.log(text);

  if (!text) {
    throw new Error("Gemini returned an empty response");
  }

  const parsed = JSON.parse(text);

  console.log("Parsed Gemini JSON:");
  console.dir(parsed, { depth: null });

  const validated = validator.parse(parsed);

  console.log("Validated resume:");
  console.dir(validated, { depth: null });

  return validated;

} catch (err) {
  console.error("====================================");
  console.error(`Resume parsing attempt ${attempt} failed`);
  console.error("Error name:", err?.name);
  console.error("Error message:", err?.message);
  console.error("Full error:", err);
  console.error("====================================");

  if (attempt === 2) {
    throw err;
  }
}
  }

  return EMPTY;
}

module.exports = { parseResume };