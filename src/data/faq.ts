export type FaqType = "text" | "list" | "steps";

export interface FaqBase {
  id: string;
  question: string;
  type: FaqType;
}

export interface FaqText extends FaqBase {
  type: "text";
  answer: string;
}

export interface FaqList extends FaqBase {
  type: "list";
  intro?: string;
  items: string[];
}

export interface FaqSteps extends FaqBase {
  type: "steps";
  items: string[];
}

export type Faq = FaqText | FaqList | FaqSteps;

export const faqs: Faq[] = [
  {
    id: "supported-tools",
    question: "What are the CC Switch-supported AI tools?",
    type: "text",
    answer:
      "CC Switch supports Claude Code, Claude Desktop, Hermes, Codex, Gemini CLI, Open Code, and OpenClaw.",
  },
  {
    id: "is-free",
    question: "Is CC Switch free?",
    type: "text",
    answer:
      "Yes, CC Switch is open-source software under the MIT license, and it is totally free.",
  },
  {
    id: "is-safe",
    question:
      "Is CC Switch safe to use with sensitive API keys and team projects?",
    type: "text",
    answer:
      "Security mainly depends on how you use the app and where your data is stored. Since the project is open-source on GitHub, anyone can review how API keys and settings are managed. Features like WebDAV, Dropbox, and OneDrive sync make it easy to use across devices, but they also store your config data on third-party cloud services. Teams handling sensitive projects should carefully decide between cloud sync and local-only storage, and review any community-made skills before installing them.",
  },
  {
    id: "technical-knowledge",
    question: "Do you need special technical knowledge to use CC Switch?",
    type: "text",
    answer:
      "As we mentioned, CC Switch is specially built for developers, so if you are a developer who operates coding tools, then you probably have enough technical skill to install and operate CC Switch without any difficulty.",
  },
  {
    id: "who-should-install",
    question: "Who should install CC Switch?",
    type: "text",
    answer:
      "You should install CC Switch if you use different AI coding tools, multiple API services, local AI models, or shared team settings.",
  },
  {
    id: "core-features",
    question: "What are the core features of CC Switch?",
    type: "list",
    intro:
      "CC Switch offers various valuable features, and here are the core features:",
    items: [
      "One click configuration",
      "Prompt Management",
      "Session management",
      "Cloud Sync",
      "Automatic Failover",
      "Providers Switching",
    ],
  },
  {
    id: "install-mac",
    question: "How to install CC Switch on Mac?",
    type: "list",
    items: [
      "CC Switch for macOS is verified and approved by Apple.",
      "You can download and install it normally without changing any security settings.",
      "The easiest and recommended way to install it is with the .dmg installer.",
    ],
  },
  {
    id: "framework",
    question: "On which framework is CC Switch built?",
    type: "text",
    answer:
      "CC Switch is built on Tauri, one of the lightest frameworks available, focused on high performance, top-notch security, and frontend flexibility.",
  },
  {
    id: "add-provider",
    question: "How can I add a provider on CC Switch?",
    type: "steps",
    items: [
      "Launch CC Switch on your system.",
      "Choose the AI tool you want to configure.",
      "Click the + sign located at the top right corner to launch the provider panel.",
      "From the dropdown menu, select a provider.",
      "Insert the API keys in the given field.",
      'Click "Fetch Models" and then "Save".',
      "Go back to the main provider list and choose the provider you added.",
      'Finally, click "Enable".',
    ],
  },
  {
    id: "what-is",
    question: "What is CC Switch for?",
    type: "text",
    answer:
      "CC Switch is a desktop app for Windows, macOS, and Linux that helps you manage settings for AI coding tools like Claude Code, Codex, Gemini CLI, OpenCode, and OpenClaw from one place.",
  },
  {
    id: "developer",
    question: "Who developed CC Switch?",
    type: "text",
    answer: "CC Switch is developed by an independent developer, farion1231.",
  },
];
