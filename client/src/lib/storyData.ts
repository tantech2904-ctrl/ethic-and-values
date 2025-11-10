
// export interface Choice {
//   text: string;
//   value: 'A' | 'B';
//   corruptionType: 'direct' | 'indirect' | 'integrity';
// }

// export interface Scene {
//   id: number;
//   title: string;
//   content: string;
//   choices: Choice[];
// }

// export interface Ending {
//   type: 'direct' | 'indirect' | 'integrity';
//   title: string;
//   description: string;
//   quote: string;
// }

// export const scenes: Scene[] = [
//   {
//     id: 1,
//     title: "First Day at Work",
//     content:
//       "It’s your first morning as **Arjun Sharma**, Assistant Development Officer in Chandrapur. The office smells of fresh paint and old paper. A smiling contractor, Mr. Mehta, enters holding a box.\n\n“Welcome, sir! Just a token of appreciation from the local business community,” he says, placing it on your desk.",
//     choices: [
//       {
//         text: "Accept the gift as a sign of goodwill — refusing might seem rude.",
//         value: 'A',
//         corruptionType: 'direct',
//       },
//       {
//         text: "Refuse politely and explain that government officers cannot accept gifts.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "The Power of Favors",
//     content:
//       "Later that week, your landlord mentions his nephew applied for a small loan through a government scheme.\n\n“Just a signature, beta,” he smiles. “He’s a good boy — all papers are fine. You can check later, no need to delay.”",
//     choices: [
//       {
//         text: "Approve the loan early as a goodwill gesture — you’ll verify documents later.",
//         value: 'A',
//         corruptionType: 'indirect',
//       },
//       {
//         text: "Explain that all loans must go through verification first, even if delayed.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "The Donation Drive",
//     content:
//       "The local school principal calls: “Sir, we’re raising funds for a girls’ library. The contractor who just got the road tender said he’ll donate ₹1 lakh — if you ask him personally.”\n\nIt’s for a good cause, and your name will appear in the newspapers as the initiative’s patron.",
//     choices: [
//       {
//         text: "Call the contractor and request the donation. After all, it’s for education.",
//         value: 'A',
//         corruptionType: 'indirect',
//       },
//       {
//         text: "Politely decline and fundraise transparently without involving tenders.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Public Complaint",
//     content:
//       "Your college friend’s cousin Rajesh visits your office, anxious. His building approval has been stuck for three months.\n\n“Arjun bhai, it’s all legal — please just move my file first. You know I wouldn’t ask if it wasn’t urgent.”",
//     choices: [
//       {
//         text: "Prioritize his file since you know him personally — it’s harmless.",
//         value: 'A',
//         corruptionType: 'indirect',
//       },
//       {
//         text: "Explain that all files must move in order and you can’t bypass procedure.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Pressure from Seniors",
//     content:
//       "Mr. Kulkarni, your senior, slides a file across his desk. “The MLA wants this housing project cleared today. Site inspection can wait — time is money. Don’t overthink.”",
//     choices: [
//       {
//         text: "Sign the file to avoid delay and show you’re a team player.",
//         value: 'A',
//         corruptionType: 'indirect',
//       },
//       {
//         text: "Insist on the site inspection before signing, even if it angers him.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
//   {
//     id: 6,
//     title: "Election Season",
//     content:
//       "A local politician requests your help: “Just ensure the development funds are released early — it’ll boost our image before the elections. No misuse, promise.”",
//     choices: [
//       {
//         text: "Approve the early release; the projects will benefit the people anyway.",
//         value: 'A',
//         corruptionType: 'indirect',
//       },
//       {
//         text: "Refuse and follow financial rules regardless of political pressure.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
//   {
//     id: 7,
//     title: "The Audit Visit",
//     content:
//       "The audit team finds irregularities from before your posting. Your deputy whispers, “Sir, if we report this, the staff will get dragged into inquiries. Let’s quietly correct it.”",
//     choices: [
//       {
//         text: "Silently adjust the records — no harm done, and your team stays safe.",
//         value: 'A',
//         corruptionType: 'indirect',
//       },
//       {
//         text: "Submit a full report and let accountability take its course.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
//   {
//     id: 8,
//     title: "The Temptation of Comfort",
//     content:
//       "After a long week, your driver says a contractor left a new smartphone at your home, saying ‘it’s just appreciation’. No one saw him. No one would know if you keep it.",
//     choices: [
//       {
//         text: "Keep it quietly — you didn’t ask for it, so it’s not a bribe.",
//         value: 'A',
//         corruptionType: 'direct',
//       },
//       {
//         text: "Return it immediately and log the incident as an unsolicited gift.",
//         value: 'B',
//         corruptionType: 'integrity',
//       },
//     ],
//   },
// ];

// export const endings: Ending[] = [
//   {
//     type: "direct",
//     title: "The Slippery Slope",
//     description:
//       "Your journey began with good intentions, but each small acceptance blurred your judgment. The contractors trust you — not for your honesty, but for your flexibility. Soon, you justify every favor as harmless until your name surfaces in an inquiry.\n\nThe smartphone on your table wasn’t free — it cost your integrity.",
//     quote: "Corruption never begins with greed. It begins with comfort.",
//   },
//   {
//     type: "indirect",
//     title: "The Grey Zone",
//     description:
//       "You never took a bribe. You just made ‘practical’ decisions — helped friends, eased paperwork, and supported ‘development’. Yet, slowly, you realized your ethics were conditional. You became the officer everyone liked — because you bent the system softly.",
//     quote: "Most corruption hides behind good intentions.",
//   },
//   {
//     type: "integrity",
//     title: "The Upright Path",
//     description:
//       "Your integrity made many uncomfortable, but it also earned silent respect. When the inquiry came, your record was spotless. The same MLA who once pressured you now praises your transparency in public meetings.\n\nYour honesty didn’t change the world overnight, but it planted seeds in the hearts of those who watched you stand firm.",
//     quote: "One honest officer can make a dishonest system think twice.",
//   },
// ];

// export function determineEnding(choices: ("A" | "B")[]): Ending {
//   const corruptionTypes = choices.map((choice, index) => {
//     const scene = scenes[index];
//     const selectedChoice = scene.choices.find((c) => c.value === choice);
//     return selectedChoice?.corruptionType || "integrity";
//   });

//   const directCount = corruptionTypes.filter((t) => t === "direct").length;
//   const integrityCount = corruptionTypes.filter((t) => t === "integrity").length;

//   if (directCount >= 1) {
//     return endings[0];
//   } else if (integrityCount >= 6) {
//     return endings[2];
//   } else {
//     return endings[1];
//   }
// }
export interface Choice {
  text: string;
  value: 'A' | 'B' | 'C' | 'D';
  corruptionType: 'direct' | 'indirect' | 'integrity';
}

export interface Scene {
  id: number;
  title: string;
  content: string;
  choices: Choice[];
}

export interface Ending {
  type: 'direct' | 'indirect' | 'integrity';
  title: string;
  description: string;
  quote: string;
}

export const scenes: Scene[] = [
  {
    id: 1,
    title: "First Day at Work",
    content: "You, **Arjun Sharma**, arrive for your first day as Assistant Development Officer in Chandrapur. Before you settle in, a well-dressed contractor, Mr. Mehta, walks in with a neatly wrapped box.\n\n“Just a small welcome gift, sir. Everyone in the department received one — it's tradition.”\n\nYour peon watches silently, expecting your reaction.",
    choices: [
      {
        text: "Accept it quietly — it’s just a token, not a bribe.",
        value: 'A',
        corruptionType: 'direct'
      },
      {
        text: "Open it, check its contents, and return it if it’s expensive.",
        value: 'B',
        corruptionType: 'indirect'
      },
      {
        text: "Refuse politely, citing office ethics and log the interaction.",
        value: 'C',
        corruptionType: 'integrity'
      },
      {
        text: "Accept it but donate it to the office pantry to avoid guilt.",
        value: 'D',
        corruptionType: 'indirect'
      }
    ]
  },
  {
    id: 2,
    title: "Favor in the File Room",
    content: "A junior clerk, visibly nervous, approaches you. “Sir, my sister’s file for widow pension is pending. I just need your initials for verification. Please, sir, it’s urgent.”\n\nThe file is incomplete, but his desperation feels genuine.",
    choices: [
      {
        text: "Approve it — helping a widow is more important than paperwork.",
        value: 'A',
        corruptionType: 'indirect'
      },
      {
        text: "Ask him to complete documentation before approval.",
        value: 'B',
        corruptionType: 'integrity'
      },
      {
        text: "Approve it quietly to motivate your team’s morale.",
        value: 'C',
        corruptionType: 'indirect'
      },
      {
        text: "Escalate the issue formally to ensure she gets help properly.",
        value: 'D',
        corruptionType: 'integrity'
      }
    ]
  },
  {
    id: 3,
    title: "A Friend in Need",
    content: "Your old college friend, Rajesh, arrives. His construction project is stuck. “Arjun, I know the process takes time, but a small push from you could save me lakhs. I’ll owe you one.”",
    choices: [
      {
        text: "Approve his file out of friendship — he deserves your support.",
        value: 'A',
        corruptionType: 'indirect'
      },
      {
        text: "Explain that files are processed by order, not relationship.",
        value: 'B',
        corruptionType: 'integrity'
      },
      {
        text: "Forward it for priority review — it’s not illegal, just efficient.",
        value: 'C',
        corruptionType: 'indirect'
      },
      {
        text: "Send it back with a note asking him to apply properly again.",
        value: 'D',
        corruptionType: 'integrity'
      }
    ]
  },
  {
    id: 4,
    title: "The School Donation",
    content: "A principal calls: “Sir, our school library needs funds. The contractor you approved offered ₹50,000 if you ask him personally. It’ll look great for your reputation too.”",
    choices: [
      {
        text: "Call the contractor — it’s for a noble cause.",
        value: 'A',
        corruptionType: 'indirect'
      },
      {
        text: "Ask the principal to approach donors officially through channels.",
        value: 'B',
        corruptionType: 'integrity'
      },
      {
        text: "Collect the money but hand it directly to the school account.",
        value: 'C',
        corruptionType: 'indirect'
      },
      {
        text: "Refuse the offer and warn the contractor about indirect influence.",
        value: 'D',
        corruptionType: 'integrity'
      }
    ]
  },
  {
    id: 5,
    title: "The Senior’s Shortcut",
    content: "Your senior, Mr. Kulkarni, tells you: “Don’t delay this road project. Sign the file — inspection can wait. The MLA is monitoring it personally.”",
    choices: [
      {
        text: "Sign immediately to avoid conflict.",
        value: 'A',
        corruptionType: 'indirect'
      },
      {
        text: "Insist on proper inspection before any approval.",
        value: 'B',
        corruptionType: 'integrity'
      },
      {
        text: "Sign but add a note: ‘Inspection to follow soon’.",
        value: 'C',
        corruptionType: 'indirect'
      },
      {
        text: "Request a written order from Mr. Kulkarni before signing.",
        value: 'D',
        corruptionType: 'integrity'
      }
    ]
  },
  {
    id: 6,
    title: "Festival Gifts",
    content: "It’s Diwali week. Several contractors send sweets and dry fruit boxes to your home. Your wife says, “They respect you, Arjun. You can’t insult them by returning.”",
    choices: [
      {
        text: "Keep the boxes — refusing would seem arrogant.",
        value: 'A',
        corruptionType: 'direct'
      },
      {
        text: "Return them with a thank-you note citing office policy.",
        value: 'B',
        corruptionType: 'integrity'
      },
      {
        text: "Distribute the gifts among office staff to stay neutral.",
        value: 'C',
        corruptionType: 'indirect'
      },
      {
        text: "Accept one box — it’s just sweets, not money.",
        value: 'D',
        corruptionType: 'indirect'
      }
    ]
  },
  {
    id: 7,
    title: "The Audit Panic",
    content: "During an audit, you find irregularities done before your tenure. Your deputy says, “Sir, it’ll harm our department’s image if you highlight this. We can correct it quietly.”",
    choices: [
      {
        text: "Hide the error to protect your team’s reputation.",
        value: 'A',
        corruptionType: 'indirect'
      },
      {
        text: "Report the issue honestly — rules are rules.",
        value: 'B',
        corruptionType: 'integrity'
      },
      {
        text: "Ask the auditor privately to ignore minor details.",
        value: 'C',
        corruptionType: 'direct'
      },
      {
        text: "Document the irregularity and propose a corrective plan.",
        value: 'D',
        corruptionType: 'integrity'
      }
    ]
  },
  {
    id: 8,
    title: "The Promotion Decision",
    content: "You’re shortlisted for a major promotion. The Minister’s PA calls: “Sir, a small contribution to the party fund ensures your name is finalized.”",
    choices: [
      {
        text: "Agree — everyone does it. It’s not a bribe, it’s politics.",
        value: 'A',
        corruptionType: 'direct'
      },
      {
        text: "Decline and trust your performance to earn it.",
        value: 'B',
        corruptionType: 'integrity'
      },
      {
        text: "Offer a ‘donation’ through an NGO to avoid direct link.",
        value: 'C',
        corruptionType: 'indirect'
      },
      {
        text: "Inform the vigilance officer anonymously.",
        value: 'D',
        corruptionType: 'integrity'
      }
    ]
  }
];

export const endings: Ending[] = [
  {
    type: 'direct',
    title: "The Fall of an Honest Man",
    description: "You started with principles but found comfort in convenience. What began as ‘just a token’ turned into quiet acceptance. You told yourself you were still better than others, but the system made you one of them.\n\nThe promotion came, but the peace never did.",
    quote: "No one wakes up corrupt — they just stop questioning small wrongs."
  },
  {
    type: 'indirect',
    title: "The Illusion of Integrity",
    description: "You walked the fine line — never openly corrupt, but rarely courageous. Your compromises seemed practical, harmless even. But each one bent the system a little more, until it stopped looking wrong.",
    quote: "The greatest corruption is the corruption we justify."
  },
  {
    type: 'integrity',
    title: "The Honest Legacy",
    description: "You endured loneliness, angered the powerful, and lost shortcuts. But you never lost yourself. Your name became an example in training sessions. You didn’t change the world — but you proved it’s possible to stay clean within it.",
    quote: "Integrity is not an act of rebellion — it’s quiet courage in motion."
  }
];

export function determineEnding(choices: ('A' | 'B' | 'C' | 'D')[]): Ending {
  const corruptionTypes = choices.map((choice, index) => {
    const scene = scenes[index];
    if (!scene) return 'integrity'; // safeguard

    const selectedChoice = scene.choices.find(c => c.value === choice);
    return selectedChoice?.corruptionType || 'integrity';
  });

  const directCount = corruptionTypes.filter(t => t === 'direct').length;
  const integrityCount = corruptionTypes.filter(t => t === 'integrity').length;

  if (directCount >= 1) {
    return endings.find(e => e.type === 'direct')!;
  } else if (integrityCount >= 5) {
    return endings.find(e => e.type === 'integrity')!;
  } else {
    return endings.find(e => e.type === 'indirect')!;
  }
}
