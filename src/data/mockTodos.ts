import { Todo } from "@/types";

export const mockTodos: Todo[] = [
  {
    id: "1",
    text: "Finalize Q3 marketing report and send to leadership",
    completed: false,
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "2",
    text: "Schedule performance reviews with the design team",
    completed: true,
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: "3",
    text: "Develop the user authentication flow for the new mobile app",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    text: "Research and compare cloud hosting providers for the new project",
    completed: false,
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: "5",
    text: "Prepare presentation slides for the upcoming client meeting",
    completed: true,
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    id: "6",
    text: "Review and merge pull requests on the main repository",
    completed: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "7",
    text: "Book flights and accommodation for the conference in San Diego",
    completed: false,
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
  },
  {
    id: "8",
    text: "Onboard the new junior developer and set up their environment",
    completed: true,
    createdAt: new Date(Date.now() - 86400000 * 6).toISOString(),
  },
];