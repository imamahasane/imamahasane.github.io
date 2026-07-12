export interface ReviewRole {
  venue: string;
  role?: string;
}

export interface VolunteerRole {
  event: string;
}

export const peerReview: ReviewRole[] = [
  { venue: "PRCV 2027" },
  { venue: "NeurIPS 2026", role: "Ethics Reviewer" },
  { venue: "Engineering Applications of Artificial Intelligence (EAAI)" },
  { venue: "Systems & Soft Computing" },
  { venue: "Journal of Agriculture and Food Research" },
  { venue: "PRCV 2025" },
  { venue: "IJCNN 2026" },
];

export const conferenceVolunteering: VolunteerRole[] = [
  { event: "2018 ICPC Asia Dhaka Regional Contest" },
  { event: "6th Intl. Conf. on Electronic Engineering and Informatics 2024" },
  {
    event:
      "IEEE Intl. Conf. on Electrical Energy Conversion Systems and Control 2025",
  },
];
