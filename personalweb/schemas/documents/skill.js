export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Skill Name",
      description: "Use one or two words. Keep it short",
    },
    {
      name: "level",
      type: "string",
      title: "Skill Level",
      options: {
        list: [
          { title: "Advanced", value: "advanced" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Beginner", value: "beginner" },
        ],
        layout: "radio",
      },
    },
    {
      name: "type",
      type: "string",
      title: "Skill Type",
      options: {
        list: [
          { title: "Technical", value: "technical" },
          { title: "Non-technical", value: "non_technical" },
        ],
        layout: "radio",
      },
    },
  ],
};
